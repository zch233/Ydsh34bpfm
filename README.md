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
### k8s
#### 生产环境

- tag规则：`release-aliyun-v(.+)`
- 应用名称：`web-common-components`
- 类型：`Deployment`
- 部署文件：`./k8s-deployment.yaml`
- 命名空间: `inner-management`

#### 服务
| 外部地址 | 内部地址 | 端口 | 容器内部端口 | nodePort | 说明 |
| --- | --- | --- | --- | --- | --- |
| [https://web-components.group-ds.com](https://web-components.group-ds.com) <br/> [http://web-components.group-ds.com](http://web-components.group-ds.com) | web-common-components.inner-management.svc.cluster.local | 80 | 80 | - | |



##### 日志
| 应用 | 日志地址 | 筛选条件 |
| --- | --- | --- |



##### 挂载文件
###### configmap

| name | key | mountPath | remark |
| --- | --- | --- | --- |



###### 卷
| pvc | pv | mountPath | remark |
| --- | --- | --- | --- |
