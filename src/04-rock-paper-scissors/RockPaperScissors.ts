export class RockPaperScissors {
  static ROCK = "rock";
  static PAPER = "paper";
  static SCISSORS = "scissors";

  static play(playerOneMove: string, playerTwoMove: string) {
    if (playerTwoMove === RockPaperScissors.PAPER) {
      return "Player two wins!";
    }
    return "Player one wins!";
  }
}
