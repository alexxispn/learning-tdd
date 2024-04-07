import { describe, expect, it } from "vitest"
import { RockPaperScissors } from "./RockPaperScissors.js"

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

describe("RockPaperScissors", () => {
  it.each([
    [RockPaperScissors.ROCK, RockPaperScissors.SCISSORS],
    [RockPaperScissors.PAPER, RockPaperScissors.ROCK],
    [RockPaperScissors.SCISSORS, RockPaperScissors.PAPER],
  ])("wins player one", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Player one wins!")
  })
  it.each([
    [RockPaperScissors.ROCK, RockPaperScissors.PAPER],
    [RockPaperScissors.PAPER, RockPaperScissors.SCISSORS],
    [RockPaperScissors.SCISSORS, RockPaperScissors.ROCK],
  ])("wins player two", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Player two wins!")
  })
  it.each([
    [RockPaperScissors.ROCK, RockPaperScissors.ROCK],
    [RockPaperScissors.PAPER, RockPaperScissors.PAPER],
    [RockPaperScissors.SCISSORS, RockPaperScissors.SCISSORS],
  ])("results in draw", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Draw!")
  })
})
