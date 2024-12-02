const part1 = (reports: string[]): number => {
  let numberOfSafeReports = 0;
  for (const report of reports) {
    const levels = report.split(' ').map((i) => parseInt(i));

    let isSafe = true;
    // if -1 - order id desceis decreasing, if 1 - order id is increasing
    let levelsOrientation = 0;

    for (let i = 0; i < levels.length; i++) {
      const cur = levels[i];
      const next = levels[i + 1];
      const levelsDiff = Math.abs(cur - next);

      if (levelsDiff < 1 || levelsDiff > 3) {
        isSafe = false;
      }

      if (cur > next) {
        if (levelsOrientation > 0) {
          isSafe = false;
        }
        levelsOrientation = -1;
      }

      if (cur < next) {
        if (levelsOrientation < 0) {
          isSafe = false;
        }
        levelsOrientation = 1;
      }
    }

    if (isSafe) {
      numberOfSafeReports++;
    }
  }

  return numberOfSafeReports;
};

const inputFile = Bun.file('day2/test-input.txt');
const inputText = await inputFile.text();
const inputLines = inputText.trim().split('\n');

console.log(part1(inputLines));
