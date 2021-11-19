# common-components

基于webpack5新特性

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 部署环境
### oss
#### 测试环境
- tag规则：`test-oss(-*[a-zA-Z0-9]*)-v(.+)`
- 地址: https://gupo-dev.oss-cn-hangzhou.aliyuncs.com/common-components/v0/
- oss路径: `oss://gupo-dev/common-components/v0/`
- build 命令：`npm run build:stage`
- publicPath: "https://gupo-dev.oss-cn-hangzhou.aliyuncs.com/common-components/v0/"