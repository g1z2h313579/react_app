<!-- fetch页面：
src/components/main/community/discover.js
src/components/main/community/new.js
src/components/main/goodfood/goodfood.js
src/components/main/kitchen/kitchen.js
src/components/main/login/login.js
src/components/main/market/market.js
src/components/main/sort/sort_ul.js     这个组件分别被sort_caipu.js和sort_yangsheng.js用到
src/components/main/eat/biji/biji.js
src/components/main/eat/caipu/caipu.js
src/components/main/eat/yundong/yundong.js


src/components/main/index/index.js    这里的煲汤路由和素食路由，由url传值到对应组件fetch -->


--------------------------------------------------------------
目录介绍：<br/>
```
    src
    |————components           
    |       |————common                             通用组件
    |       |       |————back                       后退
    |       |       |————content                    页面主体（asyncLoadCom实现非首屏其余懒加载）
    |       |       |————footer                     脚
    |       |       |————indexSearch                首页搜索框
    |       |       |————loading                    加载
    |       |       |————routerGuard                路由守卫
    |       |       |————soupSearch                 煲汤搜索框
    |       |       |————swipe                      轮播
    |       |       |————title                      通用标题
    |       |       |————video                      多媒体
    |       |————main                               主要组件
    |       |      |————cash                        首页分页（未完成）
    |       |      |————community                   关注
    |       |      |        |————attention          关注
    |       |      |        |————com_header         关注通用头部
    |       |      |        |————community_content  关注主视图
    |       |      |        |————community          关注入口
    |       |      |        |————discover           发现
    |       |      |        |————new                最新
    |       |      |————cookie                      厨房
    |       |      |————detail                      商品详情
    |       |      |————eat                         健身七分吃
    |       |      |————goodfood                    本周佳作
    |       |      |————index                       首页
    |       |      |————kitchen                     名厨
    |       |      |————login                       登录
    |       |      |————market                      集市
    |       |      |————mens                        未完成
    |       |      |————sort                        分类
    |       |      |————soup                        煲汤
    |       |      |————user                        用户
    |       |      |————vegetarian                  素食主义
    |————config                       url配置文件
    |————entry                        主视口入口
    |

```

### 所用插件
- [x] 打包构建：Babel Webpack(2.6)
- [x] 热更新
- [x] 包管理： npm
- [ ] UI库：无
- [ ] UI组件：无
- [x] 路由：React-Router(4.x) & History
- [x] JS：ES6
- [x] 样式：sass
- [x] 状态管理：react-redux
- [x] 与后台通信：Fetch
- [x] 组件懒加载: react-loadable
- [x] 图片切换: react-image-gallery
- [x] 数据模拟: mockjs
- [x] 页面过渡效果: react-fader  react-router-transition-switch
- [ ] 使用ts重构

### 实现功能：

### 通用功能：
- [x] 页面淡出淡入过渡
- [x] 数据模拟
- [x] 后退
- [x] 组件懒加载
- [x] 路由守卫
- [x] 载入中效果

###首页：
- [x] 轮播图特效
- [x] 视频播放

###分类：
- [x] 关键字搜索

###煲汤：
- [x] 关键字搜索
- [x] 根据标题或作者名搜索

###本周佳作：
- [x] 视频列表

###素食：
- [x] 关键字搜索
- [x] 根据标题或作者名搜索

###名厨：
- [x] 轮播图特效

###关注：
- [x] 发现和最新页的数据，关注或者取关后，在关注页展示

###集市：
- [x] 商品列表
- [x] 根据用户不同，详情页点击加入购物车
- [x] 根据用户不同，详情页商品数量加减

###我的：
- [x] 未登录，请登录；
- [x] 未登录，点击“我的订单”跳转到登录页；
- [x] 已登录，点击“我的订单”跳转到对应购物车页面；
- [ ] 注册用户存入数据库
- [ ] 用户数据和购物车数据存入数据库

###购物车：
- [x] 加减商品数量，价钱改变
- [x] 选中，全选效果
- [x] 删除商品效果
- [x] 以上效果全部随用户不同而不同，且支持刷新，数据保存在本地localStorage中