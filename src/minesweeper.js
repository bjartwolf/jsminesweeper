import {random, find, filter, uniq} from 'lodash';

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
  } else {
    const x = filter(getNeighbours(game, tileId), tile => tile.isMine).length;
    tile.threatCount = x;
  }
  return game;
}


//[0,1,2,3,4,5, 6, 7, 8]

//6 7 8
//3 4 5
//0 1 2
//rows: 3
//cols: 3
function getNeighbours(game, tileId) {
  const {tiles, rows, cols} = game;
  const foo = filter(
         uniq([tileId-1, tileId+1,
          tileId+cols, tileId-cols,
          tileId+cols+1, tileId+cols-1,
          tileId-cols+1, tileId-cols-1
        ]), id => id >= 0 && id < cols*rows && id != tileId)
  return foo.map( id => game.tiles[id])
}


export function isGameOver(game){
  return game.gameover === true;
}
