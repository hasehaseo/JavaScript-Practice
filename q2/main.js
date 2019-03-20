'use strict'
/* global inputWithCheck print */
try {
  main()
} catch (error) {
  print(error.message)
}

function main() {
  const input = inputWithCheck('文字列を入力してください')
  const result = countWord(input)
  print(JSON.stringify(result))
}
/**
 * 入力文字列の単語ごとの単語数をカウントする。
 * @param {String} input 入力文字列
 */
function countWord(input) {
  const result = {}
  const words = input.split(/\s+/)
  for (const word of words) {
    if (result[word]) {
      result[word]++
    } else {
      result[word] = 1
    }
  }
  return result
}
