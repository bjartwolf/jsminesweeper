export function createGame({cols, rows, mines}){

  let tiles = [];
  for (var j = 0; j < rows; j++) {
     tiles.push([])
  }

  const game = {
    cols,
    rows,
    tiles
  };
  return game
}
