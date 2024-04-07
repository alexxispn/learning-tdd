export class RockPaperScissors {
  static ROCK = "rock"
  static PAPER = "paper"
  static SCISSORS = "scissors"

  static play(playerOneMove: string, playerTwoMove: string) {
    if (
      (playerOneMove === RockPaperScissors.ROCK && playerTwoMove === RockPaperScissors.PAPER) ||
      (playerOneMove === RockPaperScissors.PAPER && playerTwoMove === RockPaperScissors.SCISSORS)
    ) {
      return "Player two wins!"
    }
    return "Player one wins!"
  }
}
