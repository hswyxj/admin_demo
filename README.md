# admin_demo

> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

## demo url 
https://hswyxj.github.io/admin_demo/



## Build Setup
```bash
# Clone project
git clone https://github.com/hswyxj/admin_demo.git

# Install dependencies
npm install

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```


# TIP
 - 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。
 - Windows 用户若安装不成功，很大概率是node-sass安装失败，解决方案:https://github.com/PanJiaChen/vue-element-admin/issues/24。
另外因为 node-sass 是依赖 python环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。
```
npm install --registry=https://registry.npm.taobao.org
```

# 移除mock 用实际接口
 - 部分mock部分实际接口，只要把mock/index.js对应接口拦截地址注释即可。

 - 如果要全部移除mock数据，只需要在 @/src/main.js 中移除 import './mock' 并且删除 @/src/mock 文件夹即可。



# 代码规范 ESLint（最好使用eslint+vscode 来写vue）

 - 代码规范所有的配置文件都在 .eslintrc.js 中。 本项目基本规范是依托于 vue 官方的 eslint 规则 eslint-config-vue。

 - VSCode 推荐安装插件：eslint 、vetur、HTML CSS Support、Prettier - Code formatter、Manta's Stylus Supremacy

 - 设置，依次点击 文件 > 首选项 > 设置 打开 VSCode 配置文件,添加如下配置
```
setting.json：
{
   // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化 
  // "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
          "language": "vue",
          "autoFix": true
      }
  ],
  //  #让prettier使用eslint的代码格式进行校验 
  "prettier.eslintIntegration": true,
  //  #去掉代码结尾的分号 
  "prettier.semi": false,
  //  #使用带引号替代双引号 
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择 
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化 
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
          "wrap_attributes": "force-aligned"
          // #vue组件中html代码格式化样式
      }
  },
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "git.confirmSync": false // 两个选择器中是否换行
}
```



# 目录结构
```
- ├── build                      // 构建相关
- ├── config                     // 配置相关
- ├── docs                       // 项目build打包的最终产物（ 忽略- 打包目录可以在config/index.js设置修改）
- ├── src                        // 源代码
- │   ├── api                    // 所有api请求
- │   ├── assets                 // 主题 字体等静态资源
- │   ├── components             // 全局公用组件
- │   │   ├── Breadcrumb               # 面包屑导航组件
- │   │   ├── Hamburger                # 侧边栏收缩组件
- │   │   ├── PanThumb                 # 图片hover效应组件
- │   │   ├── Pagination               # 分页组件
- │   │   ├── SvgIcon                  # SvgIcon组件
- │   │   └── TextHoverEffect          # 文本hover效应组件
- │   ├── directive              // 全局指令
- │   ├── filters                // 全局过滤 filter
- │   ├── icons                  // 项目所有 svg icons
- │   ├── mock                   // 项目mock 模拟数据
- │   ├── router                 // 路由配置
- │   ├── store                  // 全局 store管理（状态管理）
- │   ├── styles                 // 全局样式
- │   │   ├── btn.scss                 # 按钮样式
- │   │   ├── element-ui.scss          # 全局自定义 element-ui 样式
- │   │   ├── index.scss               # 全局通用样式
- │   │   ├── mixin.scss               # 全局mixin
- │   │   ├── sidebar.scss             # 侧边栏 css
- │   │   ├── transition.scss          # vue transition 动画
- │   │   └── variables.scss           # 全局变量
- │   ├── utils                  // 全局公用方法
- │   ├── vendor                 // 公用vendor
- │   ├── views                  // views 所有页面
- │   ├── App.vue                // 入口页面
- │   ├── main.js                // 入口文件 加载组件 初始化等
- │   └── permission.js          // 权限管理
- ├── static                     // 第三方不打包资源
- │   └── Tinymce                // 富文本
- ├── .babelrc                   // babel-loader 配置
- ├── .eslintrc.js               // eslint 配置项
- ├── .gitignore                 // git 忽略项
- ├── .travis.yml                // 自动化CI配置
- ├── favicon.ico                // favicon图标
- ├── index.html                 // html模板
- └── package.json               // package.json
```

