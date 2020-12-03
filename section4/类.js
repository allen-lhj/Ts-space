"use strict";
// 传统对象通过构造函数
// function Greeter(message) {
//     this.greeting = message
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    // constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
    // 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
    function Greeter(message) {
        this.greeting = message;
    }
    // 定义类中的方法
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.greet();
// ---------类的继承
// 定义一个动物类
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(distance);
    };
    return Animal1;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.brak = function () {
        console.log('Miao Miao!');
    };
    return Cat;
}(Animal1));
var mimi = new Cat();
mimi.move(1); // mimi可以调用父类的方法
mimi.brak();
