const feedback = document.getElementById("feedBack");
const options = ["rock", "paper", "scissors"];

const getcomputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const determineWinner = (user, computer) => {
  if (user === computer) {
    return (feedback.textContent = "it's a tie!");
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Win!";
  }
};

const gamePlay = (userChoice) => {
  const computerChoice = getcomputerChoice();
  const result = determineWinner(userChoice.toLowerCase(), computerChoice);
  feedback.textContent = `Your choice is ${userChoice} and Computer choice is ${computerChoice}. ${result}`;
};
