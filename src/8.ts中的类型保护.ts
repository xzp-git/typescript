// 类型保护 主要靠js的特性 和ts自带的功能

// 1.typeof 区分类型保护变量

function fn(val:string | number) {
  if (typeof val == 'string') {
    val.split
  }else{
    val.toFixed
  }
}

// instanceof
class Person { eat(){} }
class Dog {}

const createClass = (clazz:new () => Person|Dog) => {
  return new clazz
}
let r = createClass(Person)
if (r instanceof Person) {
  r.eat //Person
} else {
  r //Dog
}
// in语法
interface Fish {
  swinging:string
}
interface Bird {
  fly:string
}

function isFish(animal:Fish | Bird):animal is Fish {
  return 'swinging' in animal
}
function getAnimalType(animal:Fish | Bird) {
  if (isFish(animal)) {
    animal.swinging
  }else{
    animal.fly
  }
}

// 以上的情况都可以通过js来判断出来的，可以增加一个字面量类型来进行判断 可标识类型

interface IButton1{
  color:'bule'
  class1:string
}

interface IButton2{
  color:'green'
  class2:string
}

function getButton(button:IButton1|IButton2) {
  if (button.color == 'bule') {
    button.class1
  }else{
    button.class2
  }
}

// 代码的完整性保护 主要靠的是never 利用never无法到达最终结果的特性，来保证代码的完整

interface ISquare {
  kind:'square'
  width:number
}

interface IRant{
  kind:'rant',
  width:number,
  height:number
}

interface ICircle{
  kind:'circle',
  r:number
}

const assert = (obj:never) => {throw new Error('err')}
// 完整性保护 保证代码逻辑全部覆盖到
function getArea(obj:ISquare|IRant|ICircle) {
  switch(obj.kind){
    case 'square':
        return obj.width * obj.width;
    case 'rant':
        return obj.width * obj.height;
    case 'circle':
        return
    default:
      assert(obj)
  }
}

getArea({ kind: 'circle', r: 10 });

export {}