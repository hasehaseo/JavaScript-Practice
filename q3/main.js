'use strict'
/* global inputWithCheck getRandomInt output */
/**
 * じゃんけんの取り決め定義
 */
const JANKEN = {
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
  compareTo: function(m1, m2) {
    if (m1 === m2) return this.status.DRAW
    if (m1 === 0 && m2 === 1) return this.status.WIN
    if (m1 === 1 && m2 === 2) return this.status.WIN
    if (m1 === 2 && m2 === 0) return this.status.WIN
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
  const player = parseInt(
    inputWithCheck(KAKEGOE, function(str) {
      return JANKEN.kind[str]
    })
  )
  const cp = getRandomInt(3)

  output('ぽい！')
  output('コンピュータ：' + JANKEN.kind[cp])
  output('あなた：' + JANKEN.kind[player])

  switch (JANKEN.compareTo(player, cp)) {
    case JANKEN.status.WIN:
      output('あなたの勝ち！')
      break
    case JANKEN.status.LOSE:
      output('あなたの負け！')
      break
    default:
      output('アイコでしょ！')
      main()
  }
}
