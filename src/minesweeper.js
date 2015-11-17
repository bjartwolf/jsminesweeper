export function createGame({cols, rows, mines}){
  let tiles = [];
  for (var id = 0; id < rows*cols; id++) {
     mines--
     const isMine = mines >= 0
     const mine = {
       isMine,
       id
     }
     tiles.push(mine)
  }

  const game = {
    cols,
    rows,
    tiles
  };
  return game
}
