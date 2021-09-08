//函数  对函数增加类型 对函数的参数进行类型校验 对函数的返回值进行类型检验, 也可以对函数本身来校验

// 考虑函数的参数和返回值  function关键字 | 表达式来声明


//函数关键字 洗完后会对当前函数 自动推断类型

function sum1(x: number, y: string): string { //函数括号后面的是返回值类型
  return x + y
}


// 1. 可以自动根据当前等号右边的内容 推断左边的类型
// 2. 我们可以指定类型赋予一个可以兼容这个类型的函数
// 3. 函数会自动推导返回值类型

type IFn = (a: number, b: number) => Number
const sum2: IFn = (x, y) => { //函数括号后面的是返回值类型
  return x + y
}

sum2(1, 2)

//这几种方式都有使用

/**
 * ? 表示参数可以传递或者不传递 但是y的类型 可以是number | undefined
 * 默认值 用 = 号
 * 
 * 可以使用剩余运算符
 * js中默认值和可选参数不能一起使用
 */

const sum3 = (x: number, y?: number, ...args: number[]): number => {
  return x + y!
}

sum3(55, 6, 6, 9, 7)



//函数重载

// 一个方法 根据参数的不同实现不同的功能, ts目的就是根据不同的参数返回类型

function toArray(val:string): string[]
function toArray(val:number): number[]
function toArray(val:string | number){
  if (typeof val == 'string') {
     return val.split('')
  }else{
    return val.toString().split('').map(item=>Number(item));
  }
}
let r = toArray('abc'); 
console.log(r)

















export {}