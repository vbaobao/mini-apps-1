var assert = require('assert');

describe('Check Win Conditions', () => {

  it('should not detect a clear board as a win', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
  });

  it('should be able to detect a horizontal win', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,1,1,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
  });

  it('should be able to detect a vertical win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
    //test uses assert
  });

  it('should be able to detect a left diagonal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ];
    //test uses assert
  });

  it('should be able to detect a right diagonal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0],
      [0,0,0,0,1,0,0],
      [0,0,0,1,0,0,0],
      [0,0,1,0,0,0,0]
    ];
    //test uses assert
  });

  it('should be able to realize when there is not a win', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,0,1,1,1,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
  });

  it('should have a functional check that uses all win cases', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,0,1,1,1,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0]
    ];
  });

});