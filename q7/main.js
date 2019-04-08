'use strict'
/* global inputWithCheck getRandomInt output */

const MATERIAL_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '9']
const LENGTH = 4
const MESSAGE = '4桁の数字は？'
main()
function main() {
  const base = getRandomNumbers(LENGTH)
  try {
    const count = hitAndBlow(base)
    output(`${count} 回で正解!`)
  } catch (e) {
    output(e.message)
    output(`正解は[${base}]でした`)
  }
}
/**
 * @param {String} base 基準
 * @param {Number} count 試行回数
 */
function hitAndBlow(base, count = 0) {
  const input = inputWithCheck(MESSAGE, function(input) {
    return !isNaN(input) && LENGTH === input.length
  })
  output(input)
  const result = checkHitAndBlow(base, input)
  count++
  if (LENGTH !== result.hit) {
    output(`外れ：${result.hit} Hit, ${result.blow} Blow`)
    return hitAndBlow(base, count)
  }
  return count
}
/**
 * 指定した桁数の数値を格納した配列（各桁の数値は重複しない）
 * @param {Number} len 指定桁数
 * @param {String} str 配列
 */
function getRandomNumbers(len, str = '') {
  if (len === str.length) return str
  const elementNumber = getRandomInt(9 - str.length)
  str += MATERIAL_NUMBERS.splice(elementNumber, 1)[0]
  return getRandomNumbers(len, str)
}
/**
 * 基準と入力が一致することをチェックする。
 * 場所が一致する場合、hitをカウントアップ
 * 文字を含んでいる場合、blowをカウントアップ
 * @param {String} base 基準
 * @param {String} input 入力
 */
function checkHitAndBlow(base, input) {
  const result = { hit: 0, blow: 0 }
  for (let i = 0; i < input.length; i++) {
    const c = input.charAt(i)
    const index = base.indexOf(c)
    if (index === i) {
      result.hit++
    } else if (index > -1) {
      result.blow++
    }
  }
  return result
}
