// TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，
// 而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。
// 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。

function buildName(firstName: string, secondName: string) {
    return firstName + " " + secondName
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right

// 可选参数在参数后加一个？， 并且可选参数要放在后面
function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//默认参数
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
buildName3('Bob', undefined)
