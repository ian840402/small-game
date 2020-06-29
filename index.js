// TODO 可以再更改，改成定義贏的 type ， 之後直接用一個 func 迴圈跑贏的結果
const gridDom = document.querySelectorAll('.grid')
const nowPlayer = document.querySelector('.now-user')
const player_1 = '一號玩家'
const player_2 = '二號玩家'

// 版本二
// const winnerRule = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7]
// ]

// const player1Data = []
// const player2Data = []

// let turn = 0

// const winnerCheck = (playerData) => {
//   let isWin = false
//   winnerRule.forEach((ruleItem) => {
//     const rule = ruleItem.sort().toString()
//     const data = playerData
//       .filter(playerItem => ruleItem.includes(playerItem))
//       .sort()
//       .toString()
//     if (rule === data) {
//       isWin = true;
//     }
//   })
//   return isWin
// }

// gridDom.forEach((dom) => {
//   dom.addEventListener('click', (e) => {
//     if (turn < 10) {
//       const value = Number(e.target.dataset.value)
//       let isWin = false
//       turn ++
//       turn % 2 === 1 ? player1Data.push(value) : player2Data.push(value)
//       e.target.innerHTML = turn % 2 === 1 ? 'O' : 'X'
//       isWin = turn % 2 === 1 ? winnerCheck(player1Data) : winnerCheck(player2Data)
//       if (isWin) {
//         alert(`${nowPlayer.innerHTML} 獲勝！`)
//         turn = 10
//       }
//       nowPlayer.innerHTML = turn % 2 === 1 ? player_2 : player_1
//       if (!isWin && turn === 9) {
//         alert('遊戲結束！')
//       }
//     }
    
//   }, { once: true })
// })

// 版本一

// let grid_1 = 0
// let grid_2 = 0
// let grid_3 = 0
// let grid_4 = 0
// let grid_5 = 0
// let grid_6 = 0
// let grid_7 = 0
// let grid_8 = 0
// let grid_9 = 0
// let nowStatus = true

// nowPlayer.innerHTML = nowStatus ? player_1 : player_2

// const checkedEvent = (dom) => {
//   dom.innerHTML = nowStatus ? 'O' : 'X'
//   nowStatus = !nowStatus
//   nowPlayer.innerHTML = nowStatus ? player_1 : player_2
// }

// const topRowLine = () => {
//   if (grid_1 === grid_2 && grid_2 === grid_3) {
//     winnerMsg()
//   }
// }
// const middleRowLine = () => {
//   if (grid_4 === grid_5 && grid_5 === grid_6) {
//     winnerMsg()
//   }
// }
// const bottomRowLine = () => {
//   if (grid_7 === grid_8 && grid_8 === grid_9) {
//     winnerMsg()
//   }
// }
// const leftColLine = () => {
//   if (grid_1 === grid_4 && grid_4 === grid_7) {
//     winnerMsg()
//   }
// }
// const middleColLine = () => {
//   if (grid_2 === grid_5 && grid_5 === grid_8) {
//     winnerMsg()
//   }
// }
// const rightColLine = () => {
//   if (grid_3 === grid_6 && grid_6 === grid_9) {
//     winnerMsg()
//   }
// }
// const topLeft2BottomRightLine = () => {
//   if (grid_1 === grid_5 && grid_5 === grid_9) {
//     winnerMsg()
//   }
// }
// const topRight2BottomLeftLine = () => {
//   if (grid_3 === grid_5 && grid_5 === grid_7) {
//     winnerMsg()
//   }
// }

// const winnerMsg = () => {
//   const name = !nowStatus ? player_1 : player_2
//   alert(`${name} 獲勝！`)
// }

// document.querySelectorAll('.grid')[0].addEventListener('click', (e) => {
//   if (grid_1 === 0) {
//     grid_1 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     topRowLine();
//     leftColLine();
//     topLeft2BottomRightLine();
//   }
// })

// document.querySelectorAll('.grid')[1].addEventListener('click', (e) => {
//   if (grid_2 === 0) {
//     grid_2 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     topRowLine();
//     middleColLine();
//   }
// })

// document.querySelectorAll('.grid')[2].addEventListener('click', (e) => {
//   if (grid_3 === 0) {
//     grid_3 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     topRowLine();
//     rightColLine();
//     topRight2BottomLeftLine();
//   }
// })

// document.querySelectorAll('.grid')[3].addEventListener('click', (e) => {
//   if (grid_4 === 0) {
//     grid_4 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     middleRowLine();
//     leftColLine();
//   }
// })

// document.querySelectorAll('.grid')[4].addEventListener('click', (e) => {
//   if (grid_5 === 0) {
//     grid_5 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     middleRowLine();
//     middleColLine();
//     topLeft2BottomRightLine();
//     topRight2BottomLeftLine();
//   }
// })

// document.querySelectorAll('.grid')[5].addEventListener('click', (e) => {
//   if (grid_6 === 0) {
//     grid_6 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     middleRowLine();
//     rightColLine();
//   }
// })

// document.querySelectorAll('.grid')[6].addEventListener('click', (e) => {
//   if (grid_7 === 0) {
//     grid_7 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     bottomRowLine();
//     leftColLine();
//     topRight2BottomLeftLine();
//   }
// })

// document.querySelectorAll('.grid')[7].addEventListener('click', (e) => {
//   if (grid_8 === 0) {
//     grid_8 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     bottomRowLine();
//     middleColLine();
//   }
// })

// document.querySelectorAll('.grid')[8].addEventListener('click', (e) => {
//   if (grid_9 === 0) {
//     grid_9 = nowStatus ? 1 : 2
//     checkedEvent(e.target)
//     bottomRowLine();
//     rightColLine();
//     topLeft2BottomRightLine();
//   }
// })