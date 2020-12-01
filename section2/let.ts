// function f() {
//   var a = 10
//   return function g() {
//     var b = a + 1
//     return b
//   }
// }
// var g = f()

// console.log(g())

// 间隔一定毫秒输出10 10 10 10...
// for (var i = 0; i< 10; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 100 * i )
// }

// 使用匿名函数
for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)
      }, 100 * j )
  })(i)
}