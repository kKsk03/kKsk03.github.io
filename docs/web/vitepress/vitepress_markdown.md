# VitePress的Markdown示例

## 链接

### 内链接

示例文件结构  

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

如果你当前在 `foo/one.md`  

```markdown
[Home](/) <!-- 将页面跳转到根目录的index.md（主页） -->
[foo](/foo/) <!-- 将页面跳转到foo文件夹下的index.md -->
[foo heading](./#heading) <!-- 跳转到foo索引中的标题 -->
[bar - three](../bar/three) <!-- 可以省略文件名 -->
[bar - three](../bar/three.md) <!-- 可以加上md -->
[bar - four](../bar/four.html) <!-- 也可以使用html -->
```

### 外链接

外部链接会自动附加 `html` 代码: `target="_blank" rel="noreferrer"`:  

- [Baidu](https://www.baidu.com)
- [GitHub](https://www.github.com)

## 表格

代码  

```markdown
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

效果  

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji表情

代码  

```markdown
:tada: :100:
```

效果  

:tada: :100:

- [代码参考](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)