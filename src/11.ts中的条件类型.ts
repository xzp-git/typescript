//ts中的条件类型  满足某个条件给一个类型，不满足给另一个类型

interface Fish{
  name:string,
  type:'鱼'
}
interface Bird {
  name: string,
  type: '鸟'
}
interface Swiming {
  swiming: string
}
interface Sky {
  sky: string
}

type MyType<T> = T extends Bird ? Sky : Swiming //三元表达式，如果你传入的是一个联合类型，他会进行他会进行条件的分发 Fish extends Bird | Bird extends Bird
type IEnv = MyType<Fish | Bird>

interface ISchool1 {
    name: string,
    age: number
}
interface ISchool2 {
    age?: number,
    size: string
}

type School<T> = T extends {name:string} ?ISchool1 : ISchool2

type MySchool = School<ISchool2>

// Exclude:ts中内置的类型 内置类型包含条件的情况 (内部用条件来实现的)

type Exclude<T,K> = T extends K ? never : T

type MyExclude = Exclude<string|number|boolean, boolean>

// Extract:多个属性中 抽离某几个
type Extract<T,K> = T extends K ? T : never
type MyExtract = Extract<string | number | boolean, boolean>

// NonNullable:在多个类型中排除null类型
type NonNullable<T> = T extends null|undefined ? never :T
type MyNonNullable = NonNullable<string | number | null | undefined>

// ------------infer 推断
// 获取函数的返回值，infer 放在哪里 就是推断哪里的结果
function getSchool(x:string,  y:number) {
  return {name:'zf', age:12}
}
//infer 要配合extends关键字使用 infer有推断类型的功能 可以自动推断出结果
type ReturnType<T extends ((...args:any[]) => any)> = T extends ((...args:any[]) => infer R) ? R : never 
type MyReturnType = ReturnType<typeof getSchool>

type Parameters<T extends ((...args:any[]) => any)> = T extends ((...args:infer R) => any) ? R : never
type MyParameters = Parameters<typeof getSchool>;

class Person{
  constructor(name:string){}
}

type ConstructorParameters<T extends new (...args:any[]) => any>= T extends new (...args: infer R) => any ? R :never

type MyConstructorParameters = ConstructorParameters<typeof Person>

type per = InstanceType<typeof Person> // 表示Person的实例类型 相当于 type per = Person

export {}



