'use strict'
/* global output */
const MODEL_ARRAY = [20, 31, 42, 13, 5, 38]
// eslint-disable-next-line no-unused-vars
function main(array = MODEL_ARRAY) {
  output(`origin ${array.toString()}`)
  output(`sum ${sum(array)}`)
  output(`avg ${avg(array)}`)
  output(`max ${max(array)}`)
  output(`min ${min(array)}`)
  const bsortAsc = bsort(array.slice())
  output(`bubble sort asc ${bsortAsc.toString()}`)
  const bsortDsc = bsort(array.slice(), desc)
  output(`bubble sort desc ${bsortDsc.toString()}`)
  const qsortAsc = qsort(array.slice())
  output(`quick sort asc ${qsortAsc.toString()}`)
  const qsortDsc = qsort(array.slice(), desc)
  output(`quick sort desc ${qsortDsc.toString()}`)
}
/**
 * 配列の要素の最小値を探す
 * @param {Array<Number>} array 配列
 */
function min(array) {
  return group(array, lower)
}

/**
 * 配列の要素の最大値を探す
 * @param {Array<Number>} array 配列
 */
function max(array) {
  return group(array, higher)
}
/**
 * 配列の要素の平均を計算する
 * @param {Array<Number>} array 配列
 */
function avg(array) {
  if (!array || !array.length) return undefined
  return group(array, add) / array.length
}
/**
 * 配列の要素の合計を計算する
 * @param {Array<Number>} array 配列
 */
function sum(array) {
  return group(array, add)
}
/**
 * 指定の要素を入れ替える
 * @param {Array} array
 * @param {*} m 配列の要素番号
 * @param {*} n 配列の要素番号
 */
function swap(array, m, n) {
  // const tmp = array[m]
  // array[m] = array[n]
  // array[n] = tmp

  ;[array[m], array[n]] = [array[n], array[m]]
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
  if (!array || !array.length) return undefined
  return array.length === 1 ? array[0] : func(array[0], group(array.slice(1), func))
}
/**
 * bubble sort.
 * @param {*} array ソート対象
 * @param {*} compare 比較関数
 */
function bsort(array, compare = asc) {
  if (!array) return array
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (compare(array[j], array[j + 1])) {
        swap(array, j, j + 1)
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
  if (!array || array.length < 2) return array
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
