'use strict'
/* global inputWithCheck output parseIntRadix10 */
try {
  main()
} catch (error) {
  output(error.message)
}

function main(num) {
  const input = inputWithCheck('数字を入力してください', function(str) {
    return !isNaN(str) && parseIntRadix10(str) > 0
  })
  output(add(parseIntRadix10(input)))
}

/**
 * 指定の数字まで和を計算する
 * @param {Number} num 指定の数字
 */
function add(num) {
  return num ? num + add(num - 1) : num // 0はfalse
}
