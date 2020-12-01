let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
// 类型推断，，类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和结构
let strlength: number = (someValue as string).length