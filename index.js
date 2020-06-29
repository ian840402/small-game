const gridDom = document.querySelectorAll('.grid')
const nowPlayer = document.querySelector('.now-user')
const player_1 = '一號玩家'
const player_2 = '二號玩家'

const winnerRule = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const player1Data = []
const player2Data = []

let turn = 0

const winnerCheck = (playerData) => {
  let isWin = false
  winnerRule.forEach((ruleItem) => {
    const rule = ruleItem.sort().toString()
    const data = playerData
      .filter(playerItem => ruleItem.includes(playerItem))
      .sort()
      .toString()
    if (rule === data) {
      isWin = true;
    }
  })
  return isWin
}

gridDom.forEach((dom) => {
  dom.addEventListener('click', (e) => {
    if (turn < 10) {
      const value = Number(e.target.dataset.value)
      const isPlayerOne = turn % 2 === 1
      let isWin = false
      turn ++
      isPlayerOne ? player1Data.push(value) : player2Data.push(value)
      e.target.innerHTML = isPlayerOne ? 'O' : 'X'
      isWin = isPlayerOne ? winnerCheck(player1Data) : winnerCheck(player2Data)
      if (isWin) {
        alert(`${nowPlayer.innerHTML} 獲勝！`)
        turn = 10
      }
      nowPlayer.innerHTML = isPlayerOne ? player_2 : player_1
      if (!isWin && turn === 9) {
        alert('遊戲結束！')
      }
    }
    
  }, { once: true })
})
