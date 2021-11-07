// 转换为字符串，再按位相加
function bigNumberAdd(num1, num2) {
    let result = ""; // 最终结果
    let carry = false; // 进位结果

    num1 = num1.split('');
    num2 = num2.split('');

    while (num1.length || num2.length || carry) {
        // 使用~~，返回undefined也能转化为0
        carry += ~~num1.pop() + ~~num2.pop();
        // 取个位加入最终结果
        result = carry % 10 + result;
        // 判断是否进位，true/false 在加法中会转换为1和0
        carry = carry > 9;
    }
    return result;
}

console.log(bigNumberAdd('9999999999999999999999', '999999999999999999999'));