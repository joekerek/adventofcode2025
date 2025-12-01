const fs = require('fs');

const file = (fs.readFileSync('1.txt')).toString().trimEnd().split('\n');
const p1 = () => {
  let currentPosition = 50;
  const modulus = 100;
  let countZeroes = 0;
  for (const move of file) {
    const direction = move[0];
    const amount = Number(move.slice(1));
    if (direction === 'L') {
      currentPosition = (currentPosition - amount);
      while (currentPosition < 0) {
        currentPosition += modulus;
      }
    } else {
      currentPosition = (currentPosition + amount);
      while (currentPosition >= modulus) {
        currentPosition -= modulus
      }
    }
    if (currentPosition === 0) {
      countZeroes += 1;
    }
  }
  return countZeroes;
}

const p2 = () => {
  let currentPosition = 50;
  const modulus = 100;
  let countZeroes = 0;
  for (const move of file) {
    const direction = move[0];
    const amount = Number(move.slice(1));
    if (direction === 'L') {
      for (let i = 1; i <= amount; i++) {
        currentPosition -= 1;
        while (currentPosition < 0) {
          currentPosition += modulus;
        }
        if (currentPosition === 0) countZeroes += 1;
      }
    } else {
      for (let i = 1; i <= amount; i++) {
        currentPosition += 1;
        while (currentPosition >= modulus) {
          currentPosition -= modulus
        }
        if (currentPosition === 0) countZeroes += 1;
      }
    }
  }
  return countZeroes;
}
// console.log(`P1 answer ${p1()}`)
console.log(`P2 answer ${p2()}`)

