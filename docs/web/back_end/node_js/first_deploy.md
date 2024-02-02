# Node.js使用框架快速搭建

使用 `express` 进行快速搭建  

## 准备工作

1. 安装 [Node.js(LTS版)](https://nodejs.org/en/download/)
2. 安装 [VSCode](https://nodejs.org/en/download/)
3. 安装 [npm](https://www.baidu.com/s?wd=npm%E5%AE%89%E8%A3%85)

## 搭建

1. 新建一个空白文件夹，可使用 `Windows资源管理器或cmd或PowellShell`

::: tip 示例
```shell
mkdir my-nodejs-backend
cd my-nodejs-backend
```
:::

2. 使用 `VSCode` 打开上述新建的文件夹  
3. 使用 `VSCode` 中的终端，选择 `新建终端`  
4. 初始化项目  

::: tip Code
```shell
npm init -y 
```

> 这会创建一个`package.json`文件，其中包含了该项目的基本信息
:::

5. 安装 `express`

```shell
npm install express
```

## 创建并运行服务器

在项目文件夹中创建一个名为 `index.js` 的文件，并使用以下代码创建一个简单的 `Express` 服务器  

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

```

运行它  

```shell
node index.js
```

> 你将看到输出显示服务器正在运行，并且可以通过浏览器访问 `http://localhost:3000` 查看 `Hello, World!`

## 如果你想添加路由...

在上述 `index.js` 中修改如下：  

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Greetings from your Node.js backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

> 运行服务器后，可以通过访问 `http://localhost:3000/api/greet` 来获取一个JSON响应