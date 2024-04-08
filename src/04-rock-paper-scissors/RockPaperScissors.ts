type Result = "Player one wins!" | "Player two wins!" | "Draw!"

export class RockPaperScissors {
  static ROCK = "rock"
  static PAPER = "paper"
  static SCISSORS = "scissors"

  static play(playerOneMove: string, playerTwoMove: string): Result {
    if (playerOneMove === playerTwoMove) {
      return "Draw!"
    }
    if (
      (playerOneMove === RockPaperScissors.ROCK && playerTwoMove === RockPaperScissors.PAPER) ||
      (playerOneMove === RockPaperScissors.PAPER && playerTwoMove === RockPaperScissors.SCISSORS) ||
      (playerOneMove === RockPaperScissors.SCISSORS && playerTwoMove === RockPaperScissors.ROCK)
    ) {
      return "Player two wins!"
    }
    return "Player one wins!"
  }
}
