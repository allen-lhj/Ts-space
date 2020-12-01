let first1 = [1, 2]
let first2 = [3, 4]
let both = [0, ...first1, ...first2, 5, 6]
console.log(both)

let defaults = {
  food: 'spicy',
  price: '$10',
  ambiance: 'noisy'
}

let search = {...defaults, food: 'rich'} // 拓展放在前面，作为默认值，放在后面会对我们自己新加的值进行覆盖
console.log(search)