# mobile-code-002

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
谷歌浏览器要安装一系列插件https://chrome.zzzmh.cn/index

# serve with hot reload at localhost:8080
npm run dev
开发模式的IP地址--package.json:8
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 192.168.0.190",
启动浏览器--webpack.dev.conf.js:49
new OpenBrowserPlugin({ url: 'http://192.168.0.190:8080' }),
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
