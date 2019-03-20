'use strict'
/* global getRandomInt inputWithCheck */
const startMessage = '0-100で数字を当てて'
const higherMessage = 'もっと上'
const lowerMessage = 'もっと下'
main()

function main() {
  const base = getRandomInt(100)
  try {
    const count = executeHiAndLow(base)
    print('正解です', '入力回数：', count)
  } catch (e) {
    print(e.message)
    print('答えは[' + base + ']でした')
  }
}
/**
 * 入力された数値が基準より大きいか小さいか判断する。
 * 基準と一致したら、終了。
 * 一致するまで繰り返す。
 * @param {Number} base 基準
 * @param {String} message 入力を促すメッセージ
 * @param {Number} count 回答回数
 */
function executeHiAndLow(base, message = startMessage, count = 0) {
  if (message.length === 0) return count
  const num = inputWithCheck(message, function(input) {
    return !isNaN(input)
  })
  count++
  let nextMessage = ''
  if (base > num) {
    nextMessage = higherMessage
  } else if (base < num) {
    nextMessage = lowerMessage
  }
  return executeHiAndLow(base, nextMessage, count)
}
