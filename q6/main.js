'use strict'
/* global getRandomInt inputWithCheck output */
const START_MESSAGE = '0-100で数字を当てて'
const HIGHER_MESSAGE = 'もっと上'
const LOWER_MESSAGE = 'もっと下'
main()

function main() {
  const base = getRandomInt(100)
  try {
    const count = executeHiAndLow(base)
    output(`正解です 入力回数：${count}`)
  } catch (e) {
    output(e.message)
    output(`答えは[${base}]でした`)
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
function executeHiAndLow(base, message = START_MESSAGE, count = 0) {
  if (message.length === 0) return count
  const num = inputWithCheck(message, function(input) {
    return !isNaN(input)
  })
  let nextMessage = ''
  if (base > num) {
    nextMessage = HIGHER_MESSAGE
  } else if (base < num) {
    nextMessage = LOWER_MESSAGE
  }
  return executeHiAndLow(base, nextMessage, count + 1)
}
