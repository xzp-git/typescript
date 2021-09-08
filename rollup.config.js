import {nodeResolve} from '@rollup/plugin-node-resolve'

import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import path from 'path'

export default {
  input:'src/index.ts',
  output:{
    file: path.resolve(__dirname, 'dist/bundle.js'),
    /*
    global 弄个全局变量来接受
    cjs commonJS 规范
    esm
    iife  自执行函数
    umd 兼容amd + cjs 不支持esm
    */
    format:'iife',
    sourcemap:true
  },
  plugins:[
    nodeResolve({
      extensions:['.js', '.ts']
    }),
    ts({
      tsconfig:path.resolve(__dirname,'tsconfig.json')
    }),
    serve({
      port:3000,
      conntentBase:'',//表示起的服务以根目录为基准，
      openPage:'/public/index.html',
      open:true //默认打开浏览器
    })
  ]
}