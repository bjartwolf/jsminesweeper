import {expect} from 'chai';
import {createGame, revealTile, isGameOver} from '../src/minesweeper.js';

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

    it('set revealed tiles to reveald', () => {
      const game1 = createGame({cols: 10, rows: 10, mines: 0});
      revealTile(game1,4)
      expect(game1.tiles[4].isRevealed).to.be.true
    });

    it('sets game lost if mine is revealed', () => {
      const game = createGame({cols: 1, rows: 1, mines: 1});
      revealTile(game, 0);
      expect(isGameOver(game)).to.be.true;
    });

    it('reveals threatcount 1', () => {
      let runtest = () => {
        const game = createGame({cols: 1, rows: 2, mines: 1});
        revealTile(game, 0);
        const isOver = isGameOver(game)
        console.log(isOver)
        if (isOver) {
           runtest()
        } else {
          expect(game.tiles[0].threatCount).to.equal(1);
        }
      }
      runtest()
    });

  });
});
