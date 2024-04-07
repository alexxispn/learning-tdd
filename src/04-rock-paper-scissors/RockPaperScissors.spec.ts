import { describe, expect, it } from "vitest";
import { RockPaperScissors } from "./RockPaperScissors.js";

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

describe('RockPaperScissors', () => {
  it('wins player one', () => {
    const playerOneMove = RockPaperScissors.ROCK
    const playerTwoMove = RockPaperScissors.SCISSORS

    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe('Player one wins!')
  })

  it('wins player one', () => {
    const playerOneMove = RockPaperScissors.SCISSORS
    const playerTwoMove = RockPaperScissors.PAPER

    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe('Player one wins!')
  })

  it('wins player two', () => {
    const playerOneMove = RockPaperScissors.ROCK
    const playerTwoMove = RockPaperScissors.PAPER

    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe('Player two wins!')
  })
})
