//后面会持续用到，所以从第6行提到函数外面去, 而且后面不能直接跟.value，不然后面空值的时候会出错
let vv1 = <HTMLInputElement>document.getElementById('v1')
let vv2 = <HTMLInputElement>document.getElementById('v2')

let calc = () => {
    let calcType = (<HTMLInputElement>document.getElementById('type')).value
    let eleResult = <HTMLInputElement>document.getElementById('result')//为什么直接跟value就不行？
    let result = null  //这里可不可以不写result，直接用eleResult = addFun（）和其它函数
    // result = addFun(vv1,vv2)
    // eleResult.value = result
    let aValue: number = parseFloat(vv1.value)
    let bValue: number = parseFloat(vv2.value)

    if (calcType === '+') {
        result = addFun(aValue, bValue)
    } else if (calcType === '-') {
        result = subFun(aValue, bValue)
    } else if (calcType === '*') {
        result = mulFun(aValue, bValue)
    } else if (calcType === '/') {
        result = divFun(aValue, bValue)
    } else if (calcType === '%') {
        result = modFun(aValue, bValue)
    } else if (calcType === 'bmi') {
        result = bmiFun(aValue, bValue)
    }
    eleResult.value = result //如何让result只显示小数点2位？
}

//如何控制当输入为空的时候，diable计算的button
let inputCheck = (inputvalue) => {
    if (vv1.value === '' || vv2.value === '') {
        btnStatus(false)
    } else {
        btnStatus(true)
    }
}

let btnStatus = (enable) => {
    let btn = document.getElementById('calcBtn')
    if (enable) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', '')
    }
}




let addFun = (a, b) => {
    let sum = a + b
    return sum
}

let subFun = (a, b) => {
    let sum = a - b
    return sum
}

let mulFun = (a, b) => {
    let sum = a * b
    return sum
}

let divFun = (a, b) => {
    let sum = a / b
    return sum
}

let modFun = (a, b) => {
    let sum = a % b
    return sum
}

let bmiFun = (kg, m) => {
    let bmi = kg / Math.pow(m, 2)
    return Math.round(bmi)// 如何显示小数点后2位
}

//////////////////////////////////////////////////////
























