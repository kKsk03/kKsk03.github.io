# 宝塔面板常用指令

## 获取面板与登录账户名

```shell
bt default
```

**输出**  

```shell
root@hecs-358725:~# bt default
==================================================================
BT-Panel default info!
==================================================================
外网面板地址: https://xxx.xxx.xxx.xxx:xxxxx/xxxxx // [!code focus]
内网面板地址: https://xxx.xxx.x.x:xxxxx/xxxxx // [!code focus]
username: xxx // [!code focus]
password: xxxxxxxx
Warning:
If you cannot access the panel, 
release the following port (8888|888|80|443|20|21) in the security group
注意：初始密码仅在首次登录面板前能正确获取，其它时间请通过 bt 5 命令修改密码
==================================================================
```

::: tip 注意
密码若忘记可以使用 `bt 5` 命令修改密码
:::