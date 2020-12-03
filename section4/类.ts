// 传统对象通过构造函数

// function Greeter(message) {
//     this.greeting = message
//     Greeter.prototype.greet = function() {
//         return 'Hello, ' + this.greeting
//     }
// }

class Greeter {
    greeting: string // 声明constructor构造器内的变量类型

    // constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
    // 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
    constructor(message: string) {
        this.greeting = message
    }
    // 定义类中的方法
    greet() {
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')
greeter.greet()

// ---------类的继承

// 定义一个动物类
class Animal1 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(distance)
    }
}

// class Cat extends Animal1 {
//     brak() {
//         console.log('Miao Miao!')
//     }
// }

// let mimi = new Cat()
// mimi.brak()
// mimi.move(1) // mimi也可以调用父类的方法

class Snake extends Animal1 {
    constructor(name: string) {
        super(name) // 继承类调用父类的实例
    }
    move
}
