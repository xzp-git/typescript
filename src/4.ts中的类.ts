//类最早都是用构造函数来替代的  es6类的概念  (function)
//实例属性 方法 new xxx 来调用 静态属性 方法  就是通过类.xxx 原型属性和方法



class Pointer {
  // public x:number
  // public y:number//声明的变量 会被增加到实例上
  //此函数中依然可用  剩余运算符 可选参数  默认参数


  constructor(public x: number, public y: number) {
    // this.x = x
    // this.y = y
  }
}

let pointer = new Pointer(100, 100)
console.log(pointer.y, pointer.x)




/**
 * public 是属性修饰符 public 表示自己和 子类  子类之外都可以访问到
 * protected  只有自己和 自己的后辈能访问
 * private 就是只有自己能访问的属性
 * 
 * 我们也可以给构造函数添加修饰符  如果被标识成 protected  说明不能被new了, 如果表示成private说明不能被继承了 同时也不能被new
 * readonly 仅读 (const) 如果在初始化完毕后不能在修改了 如果是对象可以更改
 */

class Animal {
  public readonly n: number = 1
  protected constructor(public name: string, public age: number) {
    console.log(this.name);
  }
  static type = '哺乳动物' // 静态属性 es7 语法
  // static get type(){ // 属性访问器  es6的写法
  //     return '哺乳动物'
  // }

  static getName() {
    return '动物'
  }
  say() {
    console.log('父',this)
  }
}


class Cat extends Animal {
  constructor(name: string, age: number, public readonly address: string) {
    super(name, age); // Animal.call(this, name, age)
    console.log(this.name)
  }
  static type = '猫科动物';
  static getName() {
    console.log(super.getName())
    return '猫'
  }
  say() { // 原型方法中的super指向的是父类的原型
    super.say()
  }
  private str: string = '手撕';
  get content() {
    return this.str
  }
  set content(newVal: string) {
    this.str = newVal
  }
   // aaaa = 1; //es7 语法 ts不建议使用 会作为实例方法
}
// 静态方法可以被继承 super  默认在构造函数中 和静态方法中都指向 自己的父类 在原型方法中super 指向父类的原型

// 原型方法直接写就是原型方法,可以通过属性访问器定义原型属性

let cat = new Cat('Tom', 8, '美国');

cat.say();
cat.content = 'abc'
console.log(cat.content)


// private public protected readonly 类中的描述符

export { }