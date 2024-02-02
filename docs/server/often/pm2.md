# PM2基本安装与使用

官网地址: [pm2.keymetrics.io](https://pm2.keymetrics.io/)  

## 安装

```shell
npm install pm2 -g
```

## 使用

启动  
```shell
pm2 start app.js
```

启动 使用所有CPU核心的集群  
```shell
pm2 start app.js -i max
```

停止  
```shell
pm2 stop app.js
```

停止所有  
```shell
pm2 stop all
```

重启  
```shell
pm2 restart app.js
```

重启所有  
```shell
pm2 restart all
```

关闭  
```shell
pm2 delete app.js
```