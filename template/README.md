# vue-tpl-cli

## 使用

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init wqb2017/ec-vue-cli my-project-name
$ cd my-project-name
$ npm install
$ npm run dev
```

## 技术栈

1. 主技术栈

* [vue](https://github.com/vuejs/vue)
* [vue-router](https://github.com/vuejs/vue-router)
* [vuex](https://github.com/vuejs/vuex)
* [es6](https://github.com/bevacqua/es6)
* [es6 中文文档](https://github.com/ruanyf/es6tutorial)

2. UI 技术栈

* [pc 端 element-ui](https://github.com/ElemeFE/element)
* [移动端 mint-ui](https://github.com/ElemeFE/mint-ui)
* [移动端 vant](https://github.com/youzan/vant)

## 前端规范

* [eslint standard](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)

## IDE

* [vscode](https://code.visualstudio.com/Download)
* [vscode 常用插件和配置](https://github.com/wqb2017/vscode-plugins)

## 项目结构

```js
|-项目名
    |-build
    |-config
    |-src
      |-components //公共组件
      |-assets //公共模块
      |-directives //自定义指令
      |-filters //过滤器
      |-mixins //mixins
      |-router
      |-store
      |-views
        |-components //业务公共组件
          |-button
            |-index.vue //入口
            |-style.scss //样式
            |-images //图片
        |-home //主页
          |-index.vue
          |-style.scss
          |-images
      |-static //第三方插件
```
