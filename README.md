# egg-mongodb-demo

[![egg](https://tool.lu/shield/ajax.html?color=%234C1&subject=doc&status=eggjs)](https://eggjs.org/zh-cn/tutorials/index.html) &emsp;&emsp;
[![mongodb](https://tool.lu/shield/ajax.html?color=%2397CA00&subject=official&status=mongoDB)](https://www.mongodb.com/) &emsp;&emsp;
[![mongoose](https://tool.lu/shield/ajax.html?color=%23A4A61D&subject=github&status=egg-mongoose)](https://github.com/eggjs/egg-mongoose)

### [中文版](./README.zh_CN.md)

**Macbook-based environment**

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### import data

- [GET] http://127.0.0.1:7001/user/load


[egg]: https://eggjs.org

## Eggjs operation mongodb tutorial

Base on the `egg-mongoose`component operation**mongodb**
+ connection
    + [connect](doc/basics/connect.md)
+ create | drop collection 
    + [create collection](doc/basics/createDB.md)
    + [drop collection](doc/basics/dropDB.md)
+ crud
    + [create](doc/basics/create.md)
    + [delete](doc/basics/delete.md)
    + [update](doc/basics/update.md)
    + [find](doc/basics/find.md)
