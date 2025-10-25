---
title: 常用SQL指令
createTime: 2025/09/17 18:44:12
permalink: /wmmt/fukutoshin/xlt5x6td/
---

## 查询OCM最终排名

将返回其最终排名（按车辆），并携带其 `carId` 所属的 `userId`  
并按最终车辆的成绩进行从大到小的排列  
需自定义：  

- `T."competitionId"`  
- `RANK IN (?, ?, ?, ?, ?)`  

```sql
WITH RANKED AS (
		SELECT ROW_NUMBER() OVER (ORDER BY T.RESULT DESC) AS RANK, T."dbId", T."carId", T."competitionId"
			, T."periodId", T.RESULT, T."tunePower", T."tuneHandling", C."userId"
		FROM PUBLIC."OCMTally" T
			LEFT JOIN PUBLIC."Car" C ON T."carId" = C."carId"
		WHERE T."competitionId" = 8 -- [!code highlight] [!code word:8]
	)
SELECT *
FROM RANKED
WHERE RANK IN (1, 2, 3, 50, 75); -- [!code highlight] [!code word:(1, 2, 3, 50, 75)]
```

## 查询OCM参与玩家

将返回查询的 `competitionId` 的参与玩家情况  
将自动排除重复项，并按最终车辆的成绩进行从大到小的排列  
需自定义：  

- `competition_id`  

```sql
WITH params AS (
		SELECT 8::int AS competition_id -- [!code highlight] [!code word:8]
	), 
	ranked AS (
		SELECT t."dbId", t."carId", t."competitionId", t."periodId", t.result
			, t."tunePower", t."tuneHandling", c."userId", ROW_NUMBER() OVER (PARTITION BY c."userId" ORDER BY t.result DESC) AS rn
		FROM public."OCMTally" t
			JOIN public."Car" c ON t."carId" = c."carId"
			JOIN params p ON t."competitionId" = p.competition_id
		WHERE c."userId" <> 999999999
	)
SELECT "dbId", "carId", "competitionId", "periodId", result
	, "tunePower", "tuneHandling", "userId"
FROM ranked
WHERE rn = 1
ORDER BY result DESC;
```

## 查询VSORG最终排名

将返回其最终排名（按车辆），并携带其 `carId` 所属的 `userId`  
并按最终车辆的成绩进行从大到小的排列  
需自定义：  

- `g."ghostExpeditionId"`  
- `LIMIT`  

```sql
SELECT 
    g."dbId",
    g."carId",
    c."userId",
    g."ghostExpeditionId",
    g."sugorokuPoint",
    g."earnedScore",
    g."score"
FROM public."GhostExpedition" AS g
JOIN public."Car" AS c
    ON g."carId" = c."carId"
WHERE 
    g."ghostExpeditionId" = ?
    AND c."userId" <> 999999999
ORDER BY 
    g."score" DESC
LIMIT ?;
```

## 查询VSORG参与玩家

将返回其最终参与情况，并携带其 `carId` 所属的 `userId`  
每个 `userId` 只会有其 `carId` 中最大的 `score` 的项  
并按最终的成绩进行从大到小的排列  
需自定义：  

- `g."ghostExpeditionId"`  

```sql
SELECT 
    ROW_NUMBER() OVER (ORDER BY t."score" DESC) AS rank,
    t.*
FROM (
    SELECT DISTINCT ON (c."userId")
        g."dbId",
        g."carId",
        c."userId",
        g."ghostExpeditionId",
        g."sugorokuPoint",
        g."earnedScore",
        g."score"
    FROM public."GhostExpedition" AS g
    JOIN public."Car" AS c
        ON g."carId" = c."carId"
    WHERE 
        g."ghostExpeditionId" = ?
        AND c."userId" <> 999999999
    ORDER BY 
        c."userId",
        g."score" DESC
) AS t
ORDER BY 
    t."score" DESC;
```

## 快速发放奖励

### Lottery Ticket（ALL）

```sql
UPDATE public."WebUser"
	SET "lotteryTicket" = "lotteryTicket" + 10
	WHERE "userId" IN(
		-- 这里填用户ID的数组
	);
```

### Extra Prize

```sql
WITH params(rank, u_rank) AS (
    VALUES
        (1, 10001), -- 排名第一的用户ID [!code word:10001] [!code highlight]
        (2, 10002), -- 排名第二的用户ID [!code word:10002] [!code highlight]
        (3, 10003), -- 排名第三的用户ID [!code word:10003] [!code highlight]
        (50, 10004), -- 排名第五十的用户ID [!code word:10004] [!code highlight]
        (75, 10005) -- 排名第七十五的用户ID [!code word:10005] [!code highlight]
)
UPDATE public."WebUser" u
SET 
    "lotteryTicket" = "lotteryTicket" + CASE p.rank
        -- 这里是每个等级的奖励（抽奖券）
        WHEN 1 THEN 30 -- [!code highlight]
        WHEN 2 THEN 25 -- [!code highlight]
        WHEN 3 THEN 20 -- [!code highlight]
        WHEN 50 THEN 15 -- [!code highlight]
        WHEN 75 THEN 10 -- [!code highlight]
        ELSE 0
    END,
    "xrCredit" = "xrCredit" + CASE p.rank
        -- 这里是每个等级的奖励（点数）
        WHEN 1 THEN 10000 -- [!code highlight]
        WHEN 2 THEN 8000 -- [!code highlight]
        WHEN 3 THEN 6000 -- [!code highlight]
        WHEN 50 THEN 5000 -- [!code highlight]
        WHEN 75 THEN 4000 -- [!code highlight]
        ELSE 0
    END
FROM params p
WHERE u."userId" = p.u_rank;
```