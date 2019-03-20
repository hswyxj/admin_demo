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


## 目录结构
```
- ├── build                      // 构建相关
- ├── config                     // 配置相关
- ├── docs                       // 项目build打包的最终产物（不用管）
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

