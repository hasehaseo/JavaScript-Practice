/* eslint-disable no-unused-vars */
'use strict'

/**
 * 入力させる。
 * @param {String} message 入力を促すメッセージ
 */
function input(message) {
  const input = window.prompt(message)
  output(message)
  output('入力：' + input)
  return input
}
/**
 * 出力する。
 * 引数が1つの場合、そのまま出力
 * 引数が複数の場合、スペース区切りで出力
 * @param  {...any} contents 出力対象
 */
function output(...contents) {
  const str = contents.length === 1 ? contents : contents.join()
  console.log(str)
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
  output(name + ' error!', 'expect', expect, 'actual', actual)
}
/**
 * get random int
 * @param {Number} max 上限
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
