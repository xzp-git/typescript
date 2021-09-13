/**
 * interface 描述对象的形状和结构,可以给数据增添类型 而且方便复用
 * 
 * type 的方式 通过别名来重新定义类型
 * 
 * interface 可以被类实现 和继承  type没有这个功能
 * type 可以使用联合类型,interface 不能使用联合类型
 */

let school = {
  name: 'foo',
  age: 24
}
type schools = Array<typeof school>;
function aa(school: schools) {
}
aa([{ name: 'foo', age: 24 }]);

// 1) 如何用接口描述对象类型, 如果有联合类型 就使用type

// interface IObj{
//   name:string
//   age:number
// }

type IObj = { name: string, age: number } | string

const getObj = (obj: IObj) => { }
getObj({ name: 'foo', age: 24 })
getObj('aaaa')
// 2)描述函数类型
interface ISum {
  (a: string, b: string): string
}

// type ISum = (a:string, b:string) => string

const sum: ISum = (a, b) => {
  return a + b
}

// 3)计数器的例子  每次调用函数就累加1

interface ICount { //接口中的混合类型
  (): number
  count: number
}

const fn: ICount = (() => {
  return ++fn.count
}) as ICount
fn.count = 0;
console.log(fn());
console.log(fn());
console.log(fn());

interface IEffect {
  (): void
  id: number
}
function effect(fn: Function) {
    const reactiveEffect = createReactiveEffect(fn);
    return reactiveEffect
}

function createReactiveEffect(fn: Function) {
  const effect: IEffect = function reactiveEffect() {

  }
  effect.id = 1;
  return effect
}

/**
 * 接口的特性
 * 
 */

 interface IVegetables {
   color:string,
   taste:string
 }
//  1. 直接断言,断言后可以直接使用(要保证接口中限制的数据必须要有)
// const tomato:IVegetables = {
//   color:'red',
//   taste:'sweet',
//   size:'big'
// } as IVegetables
//可能我的代码里 用不到这个size  但是我又有这个属性  可以断言

//  2. 接口的合并 接口同名会合并,会改变原有的接口
// interface IVegetables{
//   size:string
// }
// const tomato:IVegetables = {
//   color:'red',
//   taste:'sweet',
//   size:'big'
// }

// 3. 我单独写一个tomato接口 继承蔬菜接口
// interface ITomato extends IVegetables{ //接口的继承 ts里面的
//   size:string
// }

// const tomato:ITomato = {
//   color:'red',
//   size:'big',
//   taste:'sweet'
// }

//4.可选属性 可以通过 ? 来实现
// interface IVegetables {
//   color:string,
//   taste:string,
//   [key: string] :any //任意接口 可多填
//   //size?:string 
//   //id?:number
// }
// const tomato: IVegetables = {
//   color: 'red',
//   taste: 'sweet',
//   sss:555
// }

// 5.可索引接口
interface ILikeArray {
  [key:number]:any
}

let arr: ILikeArray = [1, 2, 3]
let arr1: ILikeArray = { 1: 1, 2: 2 };

// 把一个对象赋值给一个接口，要满足接口中的所有属性
// 如果多出来的属性 可以采用 断言 、 可选、 任意接口

/**
 * 接口中的类型 可以通过类型别名的方式拿出来， 但是只能用[]
 * 
 * 嵌套的情况
 */
type MyType = {key:string, value:string}
interface XXX{
  n:MyType[]
}
interface IArr {
  arr:MyType[],
  a:XXX
}
type My = IArr['a']['n']


// 6) 接口实现 接口可以被类来实现， 接口中的方法都是抽象（没有具体实现）的
interface ISpeakable {
  name:string,
  // 用接口来实现类的时候 void 表示不关心返回值
  speak():void //描述当前实例上的方法，或者原型的方法
}

interface IChineseSpeakable{
  speakChinese():void
}

class Speak implements ISpeakable, IChineseSpeakable { 

  name!:string
  speak():string{ //此方法是原型方法
    return 'ss'
  }
  speakChinese():string{
    return 'ooo'
  }
}


// 7. 抽象类 不能被new， 可以被继承

abstract class Animal{ //只有类被标记成abstract 属性在可以被描述成abstract
  abstract name:string

  eat(){
    console.log('eat')
  }

  abstract drink(): void

}

class Cat extends Animal {
  drink():void{
    console.log('cat drink');
  }

  name: string = 'a'
}

// abstract (可以放置具体的实现) interface(只能放一些抽象的属性和方法 不能有具体实现)


//8.接口可以用来描述实例

//单例模式
// let instance:Person
// type IPerson = new(name:string) => Person 描述的是构造函数类型

interface IPerson<T>{
  new(name:string):T
}

function createInstance<T>(clazz:IPerson<T>, name:string):T {
  return new clazz(name)
}

class Persona{
  eat(){}
  constructor( public name: string){}
}
class Dog{
  drink(){}
  constructor( public name: string){}
}
//泛型就是只有当使用的时候才能确定类型，通过参数传入类型

let r = createInstance<Dog>(Dog, '小欧')//类可以充当类型，可以描述实例
r.drink()

// 接口的使用 接口特性 extends implements (不能使用联合类型)
// 别名可以使用联合类型 但是不能被继承 和 实现

export {}