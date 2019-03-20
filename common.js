/* eslint-disable no-unused-vars */
'use strict'

function input(message) {
  const input = window.prompt(message)
  print(message)
  print('入力：' + input)
  return input
}
function print(...contents) {
  console.log(contents.join(' '))
}
/**
 * 入力チェック付き入力支援
 * チェック条件に該当するまで、入力を繰り返す。
 * @param {String} message 入力を促すメッセージ
 * @param {Function} validate チェック条件（正当な入力でtrue）
 */
function inputWithCheck(
  message,
  validate = function() {
    return true
  }
) {
  const ret = input(message)
  if (ret == null || ret.length === 0) {
    throw new Error('中断しました。')
  } else if (!validate(ret)) {
    return inputWithCheck(message, validate)
  }
  return ret
}
/**
 * テスト結果failを出力する。
 * @param {String} name
 * @param {*} expect
 * @param {*} actual
 */
function fail(name, expect, actual) {
  print(name + ' error!', 'expect', expect, 'actual', actual)
}
/**
 * get random int
 * @param {Number} max 上限
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
