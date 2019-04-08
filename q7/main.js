'use strict'
/* global inputWithCheck getRandomInt output */

const MATERIAL_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const LENGTH = 4
const MESSAGE = `${LENGTH}桁の数字は？`
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
 * 基準と一致するまで、繰り返す。
 * @param {String} base 基準
 */
function hitAndBlow(base) {
  let count = 0,
    result = { hit: 0, blow: 0 }
  while (result.hit < base.length) {
    const input = inputWithCheck(MESSAGE, function(input) {
      return !isNaN(input) && base.length === input.length
    })
    result = countHitAndBlow(base, input)
    if (base.length !== result.hit) {
      output(`外れ：${result.hit} Hit, ${result.blow} Blow`)
    }
    count++
  }
  return count
}
/**
 * 指定した桁数の数字文字列（各桁の数値は重複しない）
 * @param {Number} len 指定桁数
 * @param {String} str ランダムな数字文字列
 */
function getRandomNumbers(len, str = '') {
  if (len === str.length) return str
  const elementNumber = getRandomInt(MATERIAL_NUMBERS.length)
  str += MATERIAL_NUMBERS.splice(elementNumber, 1)[0]
  return getRandomNumbers(len, str)
}
/**
 * hitとblowの件数を返却する。
 * 場所が一致する場合、hitをカウントアップ
 * 文字を含んでいる場合、blowをカウントアップ
 * @param {String} base 基準
 * @param {String} input 入力
 */
function countHitAndBlow(base, input) {
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
