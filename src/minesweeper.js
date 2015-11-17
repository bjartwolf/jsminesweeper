import {random, find} from 'lodash';

export function createGame({cols, rows, mines}){
  let tiles = []
  for (var id = 0; id < rows*cols; id++) {
     const mine = {
       isMine: false,
       id,
       isRevealed: false
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

export function revealTile(game, tileId) {
  let tile = find(game.tiles, tile => tile.id === tileId)
  tile.isRevealed = true;
  if (tile.isMine) {
    game.gameover = true
  }
  return game;
}

export function isGameOver(game){
  return game.gameover;
}
