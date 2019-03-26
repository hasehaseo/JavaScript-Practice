'use strict'
/* global fail output fail parseIntRadix10 */
const array = [0, 20, 31, 42, 13, 5, 99, 38, 67, -1]
main()

function main() {
  output('origin', array.toString())
  output('sum', sum(array))
  output('avg', avg(array))
  output('max', max(array))
  output('min', min(array))
  const rsortAsc = rsort(array.slice())
  const rsortDsc = rsort(array.slice(), function(a, b) {
    return b - a
  })
  const bsortAsc = bsort(array.slice())
  output('bubble sort asc', bsortAsc.toString())
  const bsortDsc = bsort(array.slice(), desc)
  output('bubble sort desc', bsortDsc.toString())
  const qsortAsc = qsort(array.slice())
  output('quick sort asc', qsortAsc.toString())
  const qsortDsc = qsort(array.slice(), desc)
  output('quick sort desc', qsortDsc.toString())

  // test
  compareArray('bubble sort asc', rsortAsc, bsortAsc)
  compareArray('bubble sort desc', rsortDsc, bsortDsc)
  compareArray('quick sort asc', rsortAsc, qsortAsc)
  compareArray('quick sort desc', rsortDsc, qsortDsc)
}
/**
 * 配列の要素の最小値を探す
 * @param {Array<Number>} array 配列
 */
function min(array) {
  const actual = group(array.slice(), lower)
  const expect = array.reduce(function(a, b) {
    return Math.min(a, b)
  })
  if (expect !== actual) {
    fail('min', expect, actual)
  }
  return actual
}

/**
 * 配列の要素の最大値を探す
 * @param {Array<Number>} array 配列
 */
function max(array) {
  const actual = group(array.slice(), higher)
  const expect = array.reduce(function(a, b) {
    return Math.max(a, b)
  })
  if (expect !== actual) {
    fail('max', expect, actual)
  }
  return actual
}
/**
 * 配列の要素の平均を計算する
 * @param {Array<Number>} array 配列
 */
function avg(array) {
  const actual = group(array.slice(), add) / array.length
  let sum = 0
  for (const element of array) {
    sum += element
  }
  const expect = sum / array.length
  if (expect !== actual) {
    fail(avg, expect, actual)
  }
  return actual
}
/**
 * 配列の要素の合計を計算する
 * @param {Array<Number>} array 配列
 */
function sum(array) {
  const actual = group(array.slice(), add)
  const expect = array.reduce(function(a, b) {
    return a + b
  })
  if (expect !== actual) {
    fail(expect, actual)
  }
  return actual
}
/**
 * 指定の要素を入れ替える
 * @param {Array} array
 * @param {*} n 配列の要素番号
 * @param {*} m 配列の要素番号
 */
function replace(array, n, m) {
  const tmp = array[n]
  array[n] = array[m]
  array[m] = tmp
}
/**
 * 和を返却する
 * @param {Number} num1
 * @param {Number} num2
 */
function add(num1, num2) {
  return num1 + num2
}
/**
 * 大きい数値を返却する
 * @param {Number} num1
 * @param {Number} num2
 */
function higher(num1, num2) {
  return num1 < num2 ? num2 : num1
}
/**
 * 小さい数値を返却する
 * @param {Number} num1
 * @param {Number} num2
 */
function lower(num1, num2) {
  return num1 < num2 ? num1 : num2
}
/**
 * グループ関数
 * 引数の集計方法に応じて集計結果を返却する。
 * @param {Array} array 集計対象
 * @param {Function} func 集計方法
 */
function group(array, func) {
  return array.length === 1 ? array[0] : func(array[0], group(array.slice(1), func))
}
/**
 * bubble sort.
 * @param {*} array ソート対象
 * @param {*} compare 比較関数
 */
function bsort(array, compare = asc) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (compare(array[j], array[j + 1])) {
        replace(array, j, j + 1)
      }
    }
  }
  return array
}
/**
 * quick sort.
 * @param {*} array ソート対象
 * @param {*} compare 比較関数
 */
function qsort(array, compare = asc) {
  if (array.length < 2) return array
  const pivot = array.shift()
  let left = []
  let right = []
  for (let i = 0; i < array.length; i++) {
    if (compare(pivot, array[i])) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  left = qsort(left, compare)
  right = qsort(right, compare)
  left.push(pivot)
  left.push.apply(left, right)
  return left
}
/**
 * 昇順
 */
function asc(a, b) {
  return a - b > 0
}
/**
 * 降順
 */
function desc(a, b) {
  return a - b < 0
}
/**
 * 標準のArrayが提供するソート
 * @param {Array} array ソート対象
 * @param {Function} rule ソートルール default:数値での昇順
 */
function rsort(
  array,
  rule = function(a, b) {
    return parseIntRadix10(a) - parseIntRadix10(b)
  }
) {
  return array.sort(rule)
}
/**
 * 配列を比較し、不一致の場合、failを出力する。
 * @param {String} name 対象項目
 * @param {Array} expected 期待結果
 * @param {Array} actual 実際
 */
function compareArray(name, expected, actual) {
  const expectedJson = JSON.stringify(expected).toString()
  const actualJson = JSON.stringify(actual).toString()
  if (expectedJson !== actualJson) {
    fail(name, expected, actual)
  }
}
