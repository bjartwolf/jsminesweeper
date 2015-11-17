import {expect} from 'chai';
import minesweeper from '../src/minesweeper';

describe('Minesweeper', () => {
  it('createGame returns an initial game', () => {
    const {cols, rows, tiles} = minesweeper.createGame(7, 7, 9);
    expect(cols).to.equal(7);
    expect(rows).to.equal(7);
    expect(tiles).to.have.length(7);
  })
});
