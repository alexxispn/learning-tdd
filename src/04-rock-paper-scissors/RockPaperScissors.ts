type Result = "Player one wins!" | "Player two wins!" | "Draw!"

export enum MOVE {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

export class RockPaperScissors {
  private static readonly WINNING_MOVES = {
    [MOVE.ROCK]: MOVE.SCISSORS,
    [MOVE.PAPER]: MOVE.ROCK,
    [MOVE.SCISSORS]: MOVE.PAPER,
  }

  static play(playerOneMove: MOVE, playerTwoMove: MOVE): Result {
    if (playerOneMove === playerTwoMove) {
      return "Draw!"
    }
    return RockPaperScissors.WINNING_MOVES[playerOneMove as MOVE] === playerTwoMove
      ? "Player one wins!"
      : "Player two wins!"
  }
}
