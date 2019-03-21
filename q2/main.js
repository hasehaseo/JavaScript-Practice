'use strict'
/* global inputWithCheck output */
try {
  main()
} catch (error) {
  output(error.message)
}

function main() {
  const input = inputWithCheck('文字列を入力してください')
  const result = countWord(input)
  output(JSON.stringify(result))
}
/**
 * 入力文字列の単語ごとの単語数をカウントする。
 * @param {String} input 入力文字列
 */
function countWord(input) {
  const result = {}
  const words = input.split(/\s+/)
  for (const word of words) {
    // あれば、カウントアップ／なければ、初期化
    result[word] ? result[word]++ : (result[word] = 1)
  }
  return result
}
