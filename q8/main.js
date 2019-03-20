'use strict'
/* global print */
const SEARCH_WORD = 'foo'
const REPLACE_WORD = 'uryyyy!!'
try {
  main()
} catch (error) {
  print(error.message)
}

// const hash = { text: 'foo' }
// const hash = {
//   main: {
//     first: { text: 'foobar' },
//     second: { text: 'fizzbuzzfoo', child: { text: 'foobar' } },
//   },
// }
const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } },
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } },
    },
  },
  text: 'foofava',
  foo: '外れ',
}
function main() {
  const objectToString = function(obj) {
    return JSON.stringify(obj, null, '  ')
  }
  print('hash', objectToString(hash))
  print('toUry', objectToString(toUry(hash)))
}

/**
 * text が保持する文字列内のfooをuryyyy!!に変換する
 * @param {Object} hash 変換対象
 */
function toUry(hash) {
  if (!hash || typeof hash !== 'object') return hash
  for (const key of Object.keys(hash)) {
    if (hash['text']) {
      hash['text'] = replaceWord(hash['text'])
    }
    toUry(hash[key])
  }
  return hash
}
/**
 * 対象文字列に含まれるすべての SEARCH_WORD を REPLACE_WORD に置換する
 * @param {String} str 対象文字列
 */
function replaceWord(str) {
  if (str.indexOf(SEARCH_WORD) < 0) return str
  return replaceWord(str.replace(SEARCH_WORD, REPLACE_WORD))
}
