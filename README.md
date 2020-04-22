# vue-music

> 音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 开发日志

2020.4.15

- 创建项目 使用vuecli2.x vue2.5.x 
- stylus初始化样式、字体图标、公共样式 
- 使用babel-polyfillES6转为ES5 
- 使用fastclick解决点击300毫秒延迟
- 编写m-header组件
- 编写tab组件
- 配置路由建好4个路由页面
- ~~利用jsonp插件，封装jsonp请求方法~~
- ~~recommend的jsonp请求方法~~
- jsonp请求改为xhr请求，修改recommend方法 在node服务端代理接口

2020.4.16

- 编写轮播图slider基础组件
- 编写dom.js方法，用于添加dom样式
- 编写scroll基础组件 用于滚动的dom
- 使用vue-lazyload插件 图片懒加载

2020.4.17

- loading基础组件
- singer api接口
- singer class类封装
- listview歌手列表基础组件
- dom.js添加属性和获取属性值方法
- 歌手列表滚动锚

2020.4.20

- 歌手列表右侧索引滚动bug修复
- 歌手列表标题顶部动画
- 使用vuex，封装vuex
- 抓取歌手详情接口数据

2020.4.21

- 添加song类
- singer-detail组件 二级路由
- music-list组件

2020.4.22

- song-list基础组件