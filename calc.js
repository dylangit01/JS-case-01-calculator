function addFun(a, b) {
    let sum = a + b
    return sum
}

function subFun(a, b) {
    let sum = a - b
    return sum
}

function mulFun(a, b) {
    let sum = a * b
    return sum
}

function divFun(a, b) {
    let sum = a / b
    return sum
}

function modFun(a, b) {
    let sum = a % b
    return sum
}

function inputCheck() {                               //括号里可以没有内容吗？
    let vv1 = document.getElementById('v1') //所有的element都有很多元素，我们需要的是value
    let vv2 = document.getElementById('v2')
    if (vv1.value === '' || vv2.value === '') {
        changeButtonStatus(false)
        console.log('disable')
    } else {
        changeButtonStatus(true)
        console.log('enable')
    }
}

function changeButtonStatus(enable) {
    let btn = document.getElementById('calcBtn')
    if (enable) {
        btn.removeAttribute('disabled')
    } else
        btn.setAttribute('disabled', '') //这里括号里的qualifiedName: "disabled"很重要，一定是要系统支持的attribute才可以set，不然不起作用
}

function calc() {
    let vv1 = document.getElementById('v1') //所有的element都有很多元素，我们需要的是value
    let vv2 = document.getElementById('v2')
    let result = 0
    let calcType = document.getElementById('type')
    console.log(calcType.value)
    calcType = calcType.value

    let aValue = parseInt(vv1.value, 10)
    let bValue = parseInt(vv2.value, 10)

    if ('+' === calcType) {
        result = addFun(aValue, bValue)
    } else if ('-' === calcType) {
        result = subFun(aValue, bValue)
    } else if ('*' === calcType) {
        result = mulFun(aValue, bValue)
    } else if ('/' === calcType) {
        result = divFun(aValue, bValue)
    } else if ('%' === calcType) {
        result = modFun(aValue, bValue)
    }

    let eleResult = document.getElementById('result')
    eleResult.value = result


}