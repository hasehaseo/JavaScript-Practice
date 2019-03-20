'use strict'
/* global inputWithCheck print */
try {
  main()
} catch (error) {
  print(error.message)
}

function main() {
  const input = inputWithCheck('数字を入力してください', function(str) {
    return !isNaN(str)
  })
  const result = []
  for (let i = 1; i <= input; i++) {
    result.push(judge(i))
  }
  print(result)
}
/**
 * Fizz、Buzzを判断します。
 * 引数の判定対象の数値を判定します。
 * 3で割り切れる場合、Fizz
 * 5で割り切れる場合、Buzz
 * 3と5で割り切れる場合、FizzBuzz
 * @param {Number} num 判定対象
 */
function judge(num) {
  /**
   * 基数で割り切れる場合、判定結果を返却する。
   * 割り切れない場合、空文字を返却する。
   * @param {Number} num 判定対象
   * @param {Number} base 基数
   * @param {String} ret 判定結果
   */
  const fizzBuzz = function(num, base, ret) {
    if (num % base === 0) {
      return ret
    }
    return ''
  }
  const result = '' + fizzBuzz(num, 3, 'Fizz') + fizzBuzz(num, 5, 'Buzz')
  return result.length === 0 ? num : result
}
