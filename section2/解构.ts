let input: number[] = [1, 2]

let [first, second] = input // 等同于 let first = input[0] let second = input[1]

function f([first, second]: number[]) {
  console.log(first)
  console.log(second)
}

// f(input)
// -----------------数组解构
let [third, ,four,...rest] = [1, 2, 3, 4]
console.log(third)
// console.log(rest)
console.log(four)
//------------------对象解构
let o = {
  a: 'foo',
  b: '12',
  c: 'bar'
}
let {a, ...pass} = o
// let {a, b}: {a: string, b: number} = o // 类型指定
console.log(a) // foo
console.log(pass) // { b: '12', c: 'bar' }
console.log(pass.b) // 12



