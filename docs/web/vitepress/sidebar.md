# 侧边栏配置

## 正常样式

`Section Title A` 与 `Section Title B` 为侧边栏中每个栏目的标题  

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
          ...
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          ...
        ]
      }
    ]
  }
}
```

:::details 路径中可能需要注意的地方

如果 `link` 部分中，链接指向的是文件夹的话（没有明确写明文件名），则会指向该文件夹下的 `index.md` 文件  
下方示例中，则会指向 `/guide/index.md`  

```js
sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' } // [!code focus]
        ]
      }
```

:::

:::tip 层数嵌套

侧边栏中，可以将某个文档嵌套到某个栏目之中，最多**可以嵌套6层**  

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Level 1',
        items: [
          {
            text: 'Level 2',
            items: [
              {
                text: 'Level 3',
                items: [
                  ...
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

:::

## 多重样式

该样式可以与导航栏搭配使用（导航栏对应栏目按钮指向其对应的随意一个页面）  
该样式文件布局参考如下  

```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

代码如下图所示  

```js
export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    }
  }
}
```

## 展开设定

可以设置当进入该页面时，显示的折叠是否展开

*展开（设定collapsed为false）*  

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false, // [!code hl]
        items: [...]
      }
    ]
  }
}
```

*不展开（设定collapsed为true）*  

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: true, // [!code hl]
        items: [...]
      }
    ]
  }
}
```