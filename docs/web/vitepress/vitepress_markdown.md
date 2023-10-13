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

## 自定义容器

- **INFO**  

```markdown
::: info
This is an info box.
:::
```

::: info
This is an info box.
:::

- **TIP**  

```markdown
::: tip
This is a tip.
:::
```

::: tip
This is a tip.
:::

- **WARNING**  

```markdown
::: warning
This is a warning.
:::
```

::: warning
This is a warning.
:::

- **DANGER**  

```markdown
::: danger
This is a dangerous warning.
:::
```

::: danger
This is a dangerous warning.
:::

- **DETAILS**  

```markdown
::: details
This is a details block.
:::
```

::: details
This is a details block.
:::

### 自定义容器标题

代码  

````markdown
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

效果  

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## 高亮代码与标记代码类型

在代码中标记语言类型即可  

示例  

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

效果  

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

[支持高亮的语言](https://github.com/shikijs/shiki/blob/main/docs/languages.md)  

## 代码框线性高亮

### 按标记行高亮

代码  

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

实际  

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

可以标记多行  

示例  

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

效果  

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## 按后缀标记

只需要在要标记的代码后，空一格并加上 `// [!code hl]` 即可  

示例  

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

效果  

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```

## 代码框中聚焦行

只需要在要标记的代码后，空一格并加上 `// [!code focus]` 即可  
也可以通过 `// [!code focus:<lines>]` 中的 `lines` 换成对应数值而达到聚焦行数  

示例  

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

效果  

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码框显示修改位置

使用 `// [!code --]` 或 `// [!code ++]` 来高亮修改行  

举例  

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

效果  

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码框中的错误与警告提示

使用 `// [!code warning]` 或 `// [!code error]` 来高亮需要警告和报错的地方  

举例

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

效果  

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 代码框左侧行数

在 `config.js` 中启用 `linenumbers`  

```js
export default {
  markdown: {
    lineNumbers: true // [!code focus]
  }
}
```

您可以在围栏代码块中添加 `:line-numbers` / `:no-line-numbers` 标记，以覆盖配置中设置的值  
您也可以通过在 `:line-numbers` 后添加 `=` 来自定义起始行号。例如 `:line-numbers=2` 表示代码块中的行号将从 `2` 开始  

示例  

````
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

效果  

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```