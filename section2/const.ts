const Kitty = {
  name: 'Kitty',
  age: 29
}

// Kitty =  // 打到这一步的时候发现已经报错，因为使用 “=” 去进行赋值时会改变它的引用

Kitty.name = 'Jerry' // 但是可以修改他的属性，因为Kitty本身的引用地址并没有改变