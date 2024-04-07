import { describe, it, expect } from "vitest";

// playerOne = RockPaperScissors.ROCK && playerTwo = RockPaperScissors.SCISSORS => playerOne
// playerOne = RockPaperScissors.PAPER && playerTwo = RockPaperScissors.ROCK => playerOne
// playerOne = RockPaperScissors.SCISSORS && playerTwo = RockPaperScissors.PAPER => playerOne
//
// playerOne = RockPaperScissors.ROCK && playerTwo = RockPaperScissors.PAPER => playerTwo
// playerOne = RockPaperScissors.PAPER && playerTwo = RockPaperScissors.SCISSORS => playerTwo
// playerOne = RockPaperScissors.SCISSORS && playerTwo = RockPaperScissors.ROCK => playerTwo
//
// playerOne = RockPaperScissors.ROCK && playerTwo = RockPaperScissors.ROCK => RockPaperScissors.DRAW
// playerOne = RockPaperScissors.PAPER && playerTwo = RockPaperScissors.PAPER => RockPaperScissors.DRAW
// playerOne = RockPaperScissors.SCISSORS && playerTwo = RockPaperScissors.SCISSORS => RockPaperScissors.DRAW

class RockPaperScissors {
  static ROCK = 'rock'
  static SCISSORS = 'scissors'

  static play(playerOneMove: string, playerTwoMove: string) {
    return 'Player one wins!'
  }
}

describe('RockPaperScissors', () => {
  it('wins playerOne', () => {
    const playerOneMove = RockPaperScissors.ROCK
    const playerTwoMove = RockPaperScissors.SCISSORS

    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe('Player one wins!')
  })
})
