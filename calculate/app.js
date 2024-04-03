const resultNum = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const num = document.getElementById('input1')
const num2 = document.getElementById('input2')
const btn = document.getElementById('submit')
let action = '+'

plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

function computeNum(inp1, inp2, action) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return action == '+' ? num1 + num2 : num1 - num2
}

function printResult (result) {
    if (result < 0) {
        resultNum.style.color = 'red'
    } else {
        resultNum.style.color = 'green'
    }
    resultNum.textContent = result
}

btn.onclick = function() {
    let result = computeNum(num, num2, action)
    printResult(result)
}