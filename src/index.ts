//ts的概念 装包和拆包

let data = {
  name:'age',
  age:12
}

type Proxy<T> = { //它可以复用
  get():T,
  set(value:any):void
}
type Proxify<T extends object> = {
  [K in keyof T]:Proxy<T[K]>
}

function proxify<T extends object>(obj:T):Proxify<T> {
  let result ={} as Proxify<T>
  for(let key in obj){
    let value = obj[key]
    result[key] = {
      get(){
        return value
      },
      set(newValue){
        value = newValue
      }
    }
  }
  return result
}
let proxyDatas = proxify(data);

proxyDatas.name.set
proxyDatas.name.get

function unProxify<T extends object>(obj: Proxify<T>):T {
    let result = {} as T
    for(let key in obj){
      let value = obj[key]
      result[key] = value.get()
    }
    return result
}

let data2 = unProxify(proxyDatas)


let person1 = {
  name: 'zs',
  age: 23,
  address: 'bj'
}
let person2: {
  address: 'sh'
}
// 差集 获取两个类型的差集 Exclude 在一群类型中忽略掉某个类型 和 Omit 对象中忽略
type Diff<T extends object, K extends object> = Omit<T, keyof K>
type myDiff = Diff<typeof person1, typeof person2>

//交集 不是交叉类型 从一个对象中 挑取某个类型 Extract
type Inter<T extends object, K extends object>= Pick<K, Extract<keyof T, keyof K>>

type myInter = Inter<typeof person1, typeof person2>

// 两个对象合并的问题 T & K = 会有可能导致属性是never的问题

type Person1 = {
  name:string
  age:number
}

type Person2 = {
  age:string
  address:string
  a:string
  b:number
}
// 两个类型合并 两个对象的合并 一般都是以后者为准，如果person1  里面有的 person2没有在进行添加

//1.需要拿到多余的肯定是要的
//2.公告的以后面的为准
//Diff<K, T> 拿到的是 person2中多的
type Merge<T extends object, K extends object> = Diff<T, K> & Diff<K, T> & Inter<T,K>
type Compute<T> = { [K in keyof T]: Compute<T[K]> }; //将类型展开方便提示
type myMerge = Compute<Merge<Person1, Person2>>;

//我直接在T里面 忽略掉K里面的， 只剩下T中独有的 +K

type Merge1<T extends object, K extends object> = Omit<T, keyof K> & K


//核心方法  Omit Extract Exclude  typeof  keyof  in  extends 




export {}