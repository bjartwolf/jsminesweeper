export function createGame({cols, rows, mines}){
  let tiles = [];
  for (var j = 0; j < rows*cols; j++) {
     tiles.push([])
  }

  const game = {
    cols,
    rows,
    tiles
  };
  return game
}
