const part1 = (a1: number[], a2: number[]) => {
  const sortedA1 = a1.sort((a, b) => a - b);
  const sortedA2 = a2.sort((a, b) => a - b);

  let totalDistance = 0;

  for (let i = 0; i < sortedA1.length; i++) {
    totalDistance += Math.abs(sortedA1[i] - sortedA2[i]);
  }

  return totalDistance;
};

const part2 = (a1: number[], a2: number[]) => {
  const simularityScore = a1.reduce((acc, cur, i) => {
    const numberOfAppearences = a2.filter((a) => a === cur).length;
    return (acc += cur * numberOfAppearences);
  }, 0);

  return simularityScore;
};

const inputFile = Bun.file('day1/input.txt');
const inputText = await inputFile.text();
const lines = inputText.trim().split('\n');

const input1: number[] = [];
const input2: number[] = [];

lines.forEach((line: string) => {
  input1.push(parseInt(line.split('   ')[0]));
  input2.push(parseInt(line.split('   ')[1]));
});

console.log(part1(input1, input2));
console.log(part2(input1, input2));
