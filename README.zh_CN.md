- [egg-mongodb-demo](#egg-mongodb-demo)
    + [英文版](#%E8%8B%B1%E6%96%87%E7%89%88)
  * [快速开始](#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
    + [开发](#%E5%BC%80%E5%8F%91)
    + [部署](#%E9%83%A8%E7%BD%B2)
    + [npm 脚本](#npm-%E8%84%9A%E6%9C%AC)
    + [导入数据](#%E5%AF%BC%E5%85%A5%E6%95%B0%E6%8D%AE)
  * [Eggjs 操作 mongodb 教程](#eggjs-%E6%93%8D%E4%BD%9C-mongodb-%E6%95%99%E7%A8%8B)

# egg-mongodb-demo

[![star](https://gitee.com/ghostxbh/uzy-ssm-mall/badge/star.svg?theme=gray)](https://github.com/ghostxbh/egg-mongodb-demo/stargazers)
[![fork](https://gitee.com/ghostxbh/uzy-ssm-mall/badge/fork.svg?theme=gray)](https://github.com/ghostxbh/egg-mongodb-demo/members)

### [英文版](./README.md)

**基于macbook环境下**

## 快速开始

<!-- add docs here for user -->

去 [egg docs][egg] 官网查看详情.

### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### npm 脚本

- 使用 `npm run lint` 检查代码风格.
- 使用 `npm test` 进行单元测试.
- 使用 `npm run autod` 自动检测依赖项升级, 请参阅 [autod](https://www.npmjs.com/package/autod) 了解更多详情.

### 导入数据

- [GET] http://127.0.0.1:7001/user/load

[egg]: https://eggjs.org

## Eggjs 操作 mongodb 教程

基于`egg-mongoose`组件操作**mongodb**
+ 连接
    + [连接](doc/basics/connect.md)
+ 创建 | 删除 数据集
    + [创建数据集](doc/basics/createDB.md)
    + [删除数据集](doc/basics/dropDB.md)
+ 增删改查
    + [增加](doc/basics/create.md)
    + [删除](doc/basics/delete.md)
    + [修改](doc/basics/update.md)
    + [查找](doc/basics/find.md)
