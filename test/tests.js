import {expect} from 'chai';
import {createGame} from '../src/minesweeper.js';

describe('Minesweeper', () => {
  describe('createGame', () => {
    it('returns an initial game', () => {
      const {cols, rows, tiles} = createGame({cols:7, rows:7, mines:9});
      expect(cols).to.equal(7);
      expect(rows).to.equal(7);
      expect(tiles).to.have.length(7*7);
    });

    it('hides mines among the tiles', () => {
      const {tiles} = createGame({cols: 2, rows: 3, mines: 3});
      expect(tiles.filter(tile => tile.isMine)).to.have.length(3);
    });

    it('has correct ids', () => {
      const {tiles} = createGame({cols: 2, rows: 3, mines: 3});
      expect(tiles[3].id).to.equal(3);
    });

    it('has a random distribution for mines', () => {
      const game1 = createGame({cols: 10, rows: 10, mines: 30});
      const game2 = createGame({cols: 10, rows: 10, mines: 30});
      expect(game1).to.not.deep.equal(game2);
    });
  });
});
