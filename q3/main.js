'use strict'
/* global inputWithCheck getRandomInt output parseIntRadix10 */
/**
 * じゃんけんの取り決め定義
 */
const janken = {
  kind: {
    0: 'グー',
    1: 'チョキ',
    2: 'パー',
  },
  status: {
    WIN: 1,
    LOSE: -1,
    DRAW: 0,
  },
  /**
   * じゃんけん手の勝ち負けを判断する。
   * @param {Number} player 自分の手
   * @param {Number} rival 相手の手
   */
  compareTo: function(player, rival) {
    if (player === rival) return this.status.DRAW
    if (player === 0 && rival === 1) return this.status.WIN
    if (player === 1 && rival === 2) return this.status.WIN
    if (player === 2 && rival === 0) return this.status.WIN
    return this.status.LOSE
  },
}
const KAKEGOE = 'じゃんけんします。\n0.グー 1.チョキ 2.パー'

try {
  main()
} catch (error) {
  output(error.message)
}

function main() {
  const player = parseIntRadix10(
    inputWithCheck(KAKEGOE, function(str) {
      return janken.kind[str]
    })
  )
  const cp = getRandomInt(3)

  output('ぽい！')
  output('コンピュータ：' + janken.kind[cp])
  output('あなた：' + janken.kind[player])

  switch (janken.compareTo(player, cp)) {
    case janken.status.WIN:
      output('あなたの勝ち！')
      break
    case janken.status.LOSE:
      output('あなたの負け！')
      break
    default:
      output('アイコでしょ！')
      main()
  }
}
