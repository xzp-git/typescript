//交叉类型 = 交集(可以理解成涵盖所有属性)（和数学中的有点差异）

interface Person1{
  handsome:number
  // a:string //如果类型不一致 则相交
}

interface Person2 {
  height:string
  // a:number
}

type Person3 = Person1 & Person2 // | 或的关系

let person:Person3 = {
 height:"aa",
 handsome:555
}

// 在原有的类型基础上想去扩展属性 可以用交叉类型
// ts的核心为了安全 交叉类型 可以赋予给没有交叉之前的类型

type Person4 = Person2 & {money: string}
let person4:Person4 = {
  money:'有钱',
  ...person,
}

let p222:Person2 = person
p222.height

// 方法的mixin 默认推断会生成交集

function mixin<T extends object, K extends object>(o1:T, o2:K):T & K {
  return {...o1, ...o2}
}
//我们后续真正合并属性的时候要以一方为基础 不会直接相交，可能会导致never情况
let r = mixin({}, {address:'xxx', name:12})


export {}