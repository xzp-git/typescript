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
