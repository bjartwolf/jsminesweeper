import {random} from 'lodash';

export function createGame({cols, rows, mines}){
  let tiles = []
  for (var id = 0; id < rows*cols; id++) {
     const isMine = false
     const mine = {
       isMine,
       id
     }
     tiles.push(mine)
  }
  while (mines > 0) {
    mines--
    let possibleTiles = tiles.filter ( tile => !tile.isMine)
    let possibilities = possibleTiles.length
    let minePosition = random(0,possibilities-1)
    possibleTiles[minePosition].isMine = true
  }

  const game = {
    cols,
    rows,
    tiles
  };
  return game
}
