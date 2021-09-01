## 安装
- npm install typescript -g
- tsc --init 生成配置文件

- 希望可以直接运行ts（测试）
- code runner + npm install ts-node -g

> 全局编译  code runner  用node环境来执行ts




## 构建工具来处理ts
- webpack  ×  rollup √

解析ts的方式 有两种  ts插件来解析， 可以通过babel来解析

- rollup 一般情况下 会采用 rollup-plugin-typescript

- webpack ts-loader  /  babel-plugin-typescript

`npm i rollup typescript ro  llup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-serve`
- `rollup` 打包工具
- `rollup-plugin-typescript2` 用来解析ts的插件
- `@rollup/plugin-node-resolve` 让rollup来支持引入第三方包
- `rollup-plugin-serve` 用来开启一个服务端口
```js
"scripts": {
    "dev": "rollup -cw" // cw 表示使用配置文件  并且监测文件的变化
},
```