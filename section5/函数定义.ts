// 定义函数时指定参数类型和返回值类型
function add(x: number, y: number): number {
    return x + y
}

//匿名函数,两周声明方式使用一种即可
let myAdd:(baseValue: number, increment: number) => number = function (x, y) {
    return x + y
}
