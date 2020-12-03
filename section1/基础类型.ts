// 定义字符串变量
let myName: string = 'liu'
// 定义number变量
let age: number = 23

console.log(`Hello my name is ${myName} I'll be ${age + 1} years old !`)

//定义数组
let num1: any[] = [1,2,'p'] // 数组中可以存放任意类型
let num2: number[] = [1, 2, 3, 4] // 数组中只能存放number类型
let num3: string[] = ['a', 'b', 'c', 'd'] // 数组中只能存放string类型

//定义元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let num4: [number, string] = [1, 'p']

// any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查,例如上面的定义内部多类型的数组

// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message");
}
