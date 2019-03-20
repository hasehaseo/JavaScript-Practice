'use strict'
/* global inputWithCheck print */
try {
  main()
} catch (error) {
  print(error.message)
}

function main(num) {
  const input = inputWithCheck('数字を入力してください', function(str) {
    return !isNaN(str) && parseInt(str) > 0
  })
  print(add(parseInt(input)))
}
/**
 * 指定の数字まで和を計算する
 * @param {Number} num 指定の数字
 */
function add(num) {
  if (num === 0) return num
  return num + add(num - 1)
}
