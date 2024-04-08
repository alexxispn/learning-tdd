import { describe, expect, it } from "vitest"
import { MOVE, RockPaperScissors } from "./RockPaperScissors.js"

describe("RockPaperScissors", () => {
  it.each([
    [MOVE.ROCK, MOVE.SCISSORS],
    [MOVE.PAPER, MOVE.ROCK],
    [MOVE.SCISSORS, MOVE.PAPER],
  ])("wins player one", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Player one wins!")
  })
  it.each([
    [MOVE.ROCK, MOVE.PAPER],
    [MOVE.PAPER, MOVE.SCISSORS],
    [MOVE.SCISSORS, MOVE.ROCK],
  ])("wins player two", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Player two wins!")
  })
  it.each([
    [MOVE.ROCK, MOVE.ROCK],
    [MOVE.PAPER, MOVE.PAPER],
    [MOVE.SCISSORS, MOVE.SCISSORS],
  ])("results in draw", (playerOneMove, playerTwoMove) => {
    const winner = RockPaperScissors.play(playerOneMove, playerTwoMove)

    expect(winner).toBe("Draw!")
  })
})
