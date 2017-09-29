let johnAge = 11;
let johnHeight = 150;

let rickAge = 14;
let rickHeight = 180;

let danAge = 16;
let danHeight = 210;



let johnScore = johnHeight + (johnAge * 5);
let rickScore = rickHeight + (rickAge * 5);
let danScore = danHeight + (danAge * 5);


if (johnScore === rickScore && johnScore === danScore) {
  console.log("It's a draw!")
} else if (johnScore > rickScore && johnScore > danScore) {
  console.log("John wins!")
} else if (johnScore < rickScore && rickScore > danScore) {
  console.log('Rick wins!')
} else if (danScore > johnScore && danScore > rickScore) {
  console.log('Dan wins!')
} else {
  console.log('Invalid input, please use a number.')
}
