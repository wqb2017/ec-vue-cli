## vue-webpack-boilerplate

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init wqb2017/ec-vue-cli my-project-name
$ cd my-project-name
$ npm install
$ npm run dev
```

If port 9090 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

```bash
vue init username/repo my-project
```

## 目录结构

```javascript
|-standard  项目名称
    ├─build                                           // 项目构建(webpack)相关代码
    │      build.js                                   // 生产环境构建代码
    │      check-versions.js                          // 检查node、npm等版本
    │      dev-client.js                              // 热重载相关
    │      dev-server.js                              // 构建本地服务器
    │      utils.js                                   // 构建工具相关
    │      vue-loader.conf.js                         // vue-loader环境配置
    │      webpack.base.conf.js                       // webpack基础配置
    │      webpack.dev.conf.js                        // webpack开发环境配置
    │      webpack.prod.conf.js                       // webpack生产环境配置
    ├─config                                          // 项目开发环境配置
    │      dev.env.js                                 // 开发环境变量
    │      index.js                                   // 项目一些配置变量
    │      prod.env.js                                // 生产环境变量
    |-dosc                                            //前端规范
    ├─dist                                            // 项目打包生成目录
    ├─src                                             // 源代码目录
    │  │  App.vue                                     // 页面入口文件
    │  │  main.js                                     // 程序入口文件，加载各种公共组件
    │  ├─directives                                   // 公共指令
    │  ├─filters                                      // 公共过滤
    │  ├─mixins                                       // 公共方法
    │  ├─common                                       // js公共文件目录
    │  ├─components                                   // 公共组件
    │  ├─style                                        // 公共样式
    │  ├─imgs                                         // 公共图片
    │  ├─iconfont                                     // 公共字体
    │  ├─views                                        // 页面级组件
    │  │      ├─layout                                //页面布局
    │  │         ├─index.vue                          //入口
    │  │      ├─login                                 //登录
    │  │         ├─index.vue                          //入口
    │  └─router                                       // 路由配置目录
    │          index.js                               // 路由配置入口文件
    ├─static                                          // 静态资源文件
    ├─ .babelrc                                       // ES6语法编译配置
    ├─ .editorconfig                                  // 定义代码格式
    ├─ .eslintrc                                      // eslin代码检查
    ├─ .postcssrc                                     // postcss配置相关
    ├─ .gitignore                                     // git上传需要忽略的文件格式
    ├─ README.md                                      // 项目说明
    ├─ index.html                                     // 入口页面
    ├─ package.json                                   // 项目基本信息
```

## vscode 相关配置

* [vscode 插件](https://github.com/wqb2017/vscode-plugins)

## 前端规范

* [dosc](https://github.com/wqb2017/ec-vue-cli-tpl/tree/master/template/dosc)
