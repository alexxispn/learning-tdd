export class RockPaperScissors {
  static ROCK = "rock";
  static PAPER = "paper";
  static SCISSORS = "scissors";

  static play(playerOneMove: string, playerTwoMove: string) {
    if (playerTwoMove === RockPaperScissors.PAPER && playerOneMove === RockPaperScissors.ROCK) {
      return "Player two wins!";
    }
    return "Player one wins!";
  }
}
