interface LabelledValue {
  label: string // 必须要有，且类型要一致
  size?: number // 可选属性
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {
  label: 'Size is 10',
  size: 10
}

printLabel(myObj)

// ---------可选属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

interface Square {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {color: '', area: 200}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  console.log(newSquare)
  return newSquare
}
let mySquare = createSquare({colour: 'white', width: 10}) //当传入没有定义的类型时，let mySquare = createSquare({colour: 'white', width: 10} as SquareConfig)
// 然而最佳方式是在接口中添加一个字符串索引签名 [propName: string]: any
// 还有一种方式就是将这个对象赋值给另一个变量，因为squareoptions不会经过额外的检查，所以编译器不会报错
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);
// 你可能不应该去绕开这些检查。 对于包含方法和内部状态的复杂对象字面量来讲，
// 你可能需要使用这些技巧，但是大部额外属性检查错误是真正的bug。 
// 就是说你遇到了额外类型检查出的错误，比如“option bags”，你应该去审查一下你的类型声明。
//  在这里，如果支持传入 color或colour属性到createSquare，你应该修改SquareConfig定义来体现出这一点。
//-------------只读属性
interface Point {
  readonly x: number
  readonly y: number
}
// -----------------函数类型的接口
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

// function ():boolean  冒号后面代表函数要返回值的类型
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface searchFunc {
  (source: string, subString: string): boolean
}

let mySearch: searchFunc
mySearch = function(source: string, subString: string): boolean {
  let result = source.search(subString) // search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没找到返回-1
  return result > -1
}
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子
// let mySearch: SearchFunc
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub)
//   return result > -1
// }

// ------------索引类型的接口
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Jess']
let myStr = myArray[0]
console.log(myStr)
//数字索引和字符串索引可以同时使用，但是数字类型必须是字符串类型的字类型
