# egg-mongodb-demo

[![egg](https://tool.lu/shield/ajax.html?color=%234C1&subject=doc&status=eggjs)](https://eggjs.org/zh-cn/tutorials/index.html) &emsp;&emsp;
[![mongodb](https://tool.lu/shield/ajax.html?color=%2397CA00&subject=official&status=mongoDB)](https://www.mongodb.com/) &emsp;&emsp;
[![mongoose](https://tool.lu/shield/ajax.html?color=%23A4A61D&subject=github&status=egg-mongoose)](https://github.com/eggjs/egg-mongoose)

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
