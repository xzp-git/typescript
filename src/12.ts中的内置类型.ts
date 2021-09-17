//ts中其他的内置类型 根据定义好的已有的类型 演变出一些其他类型

interface ICompany {
  name: string
  address: string
}
interface IPerson {
  name?: string
  age: number
  company?: ICompany
}
//1.Partial 表示选项可以是填的，深度递归， 默认是不递归的

type Partial<T> = {
  [K in keyof T]?: T[K] extends object ? Partial<T[K]>:T[K]
}

type MyPerson = Partial<IPerson>

// 2. Required -? 去掉可选

type Required<T> = {
  [K in keyof T ]-?:T[K]    
}

type MyRequired = Required<MyPerson>

//3. Readonly
type Readonly<T> = {
  readonly [K in keyof T]:T[K]
}
type MyReadonly = Readonly<IPerson>

//4.Pick 精挑细选(对象里选属性)  extract 抽离可用的(类型中选择类型)

type Pick<T, K extends keyof T> = {[X in K]: T[K] }  //挑选类型
type MyPick = Pick<IPerson, 'age' | 'company'>

//5. Omit 忽略属性 两个对象的合并 T&K
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
//我要的是 忽略掉name的其他的
type MyType = Omit<IPerson, 'name'>

//6. Record 类型
type Record<K extends keyof any, T> = {
  [P in K]:T
}

let obj:Record<string,string> = {a:'1', b:'2'}








export {}