const fs = require('fs');

const file = (fs.readFileSync('2.txt')).toString().trimEnd()

const splitFile = file.split(',')

const p1 = () => {
  const ranges = [];
  for (const input of splitFile) {
    const [start, end] = input.split('-')
    const entries = []
    for (let i = Number(start); i <= Number(end); i++) {
      entries.push(i)
    }
    ranges.push(entries)
  }

  const isInValid = (n) => {
    const s = String(n);
    const len = s.length;
    if (len % 2 !== 0) {
      return false;
    }
    const firstPart = s.slice(0, len / 2);
    const secondPart = s.slice(len / 2);

    return firstPart === secondPart;
  }

  const invalids = [];
  for (const r of ranges) {
    for (const entry of r) {
      if (isInValid(entry)) {
        invalids.push(entry);
      }
    }
  }
  return invalids.reduce((prev, curr) => prev + curr, 0);
}

const p2 = () => {
  const ranges = [];
  for (const input of splitFile) {
    const [start, end] = input.split('-')
    const entries = []
    for (let i = Number(start); i <= Number(end); i++) {
      entries.push(i)
    }
    ranges.push(entries)
  }

  const subStringMakesString = (str, substr) => {
    if(str.length % substr.length !== 0) {
      return false;
    }
    const times = str.length / substr.length;
    let result = '';
    for(let i = 0; i < times; i++) {
      result += substr;
    }
    return result === str;
  }

  const getAllSubStrings = (str) => {
    const substrings = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        substrings.push(str.slice(i, j));
      }
    }
    return substrings;
  }

  const hasRepeatedSequence = (str) => {
    const subStrings = getAllSubStrings(str);

    for (const sub of subStrings) {
      const makesString = subStringMakesString(str, sub)
      if (makesString) return true;
    }
    return false;
  }

  const invalids = [];
  for (const r of ranges) {
    for (const entry of r) {
      if (hasRepeatedSequence(String(entry))) {
        invalids.push(Number(entry))
      }
    }
  }
  return invalids.reduce((prev, curr) => prev + curr, 0);
}

console.log(`p1 = ${p1()}`)
console.log(`p2 = ${p2()}`)
