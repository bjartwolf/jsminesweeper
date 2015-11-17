import {expect} from 'chai';
import {createGame} from '../src/minesweeper.js';

describe('Minesweeper', () => {
  it('createGame returns an initial game', () => {
    const {cols, rows, tiles} = createGame({cols:7, rows:7, mines:9});
    expect(cols).to.equal(7);
    expect(rows).to.equal(7);
    expect(tiles).to.have.length(7*7);
  })
});
