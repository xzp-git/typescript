//泛型的用处在于 当我们调用的时候 确定类型 而不是一开始就写好类型，类型不确定，只有在执行的时候才能确定

//1.单个泛型 声明的时候 需要用 <> 包裹起来 传值的时候也需要

// function createArray<T>(times:number, value:T):T[] {
//   let result = []
//   for(let i = 0; i < times; i++){
//     result.push(value)
//   }
//   return result
// }
// let r = createArray(5,'aav')

interface IMyArr<T>{
  [key:number]:T
}

interface ICreateArray<K>{
  //interface后面的 类型和函数前面的类型的区别，如果放在函数前面 表示使用函数的时候确定了类型放在接口的后面表示时使用接口的时候确定类型
  <T>(x:K, y:T):IMyArr<T>
}

const createArray:ICreateArray<number> = (times,value) => {
  let result = []
  for(let i = 0; i < times; i++){
    result.push(value)
  }
  return result
}
createArray(3, 'aaa')

//2. 多个泛型 元组进行类型交换

const swap = <T, K>(tuple: [T, K]):[K, T] => {
  return [tuple[1], tuple[0]]
}

let r = swap([123, 'sss00'])

//约束对象
 const sum = <T extends string>(a: T, b: T):T => {
   return (a + b ) as T
 }
 sum('a', 'v')

 //3. 泛型约束 主要强调类型中必须包含某个属性
 type withLen = {length: number}
 const computeArrayLength = <T extends withLen, K extends withLen>(arr1:T, arr2:K):number => {
   return arr1.length + arr2.length
 }

 computeArrayLength('123', {length:3})

 const getVal = <T extends object, K extends keyof T>(obj: T, key: K) => {
   if (typeof obj !== 'object') {
     return 
   }
   return obj[key]
 }

 type T1 = keyof{a:1, b:2}
 type T2 = keyof string
 type T3 = keyof any //string | number | symbol

 getVal({a:1}, 'a')

//泛型可以给类来使用

class GetArrayMax<T = number>{
  public arr:T[] = []
  add(val:T){
    this.arr.push(val)
  }
  getMax():T{
    let arr = this.arr
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] > max ? max = arr[i] : null
    }
    return max;
  }
}
let arr = new GetArrayMax(); // 泛型只有当使用后才知道具体的类型
arr.add(1);
arr.add(2)
arr.add(3)
let r1 = arr.getMax()

// 泛型可以在 函数 类 （接口、别名） 中使用 

// extends 约束  keyof 取当前类型的key  typeof 取当前值的类型

export { }