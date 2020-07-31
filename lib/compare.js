const chalk = require('chalk');

const styles = {
  dim: chalk.gray,
  success: chalk.black.bgGreen,
  fail: chalk.bgRed,
  highlight: chalk.yellow,
};

const compare = (generatorFn, tests, expected) => {
  tests.forEach((testCase, index) => {
    const generatedResult = generatorFn(testCase);
    const expectedResult = expected[index];
    console.log(styles.highlight(`Case ${index}`));
    console.log(`${styles.dim('<--')} ${testCase}`);
    console.log(`${styles.dim('-->')} ${generatedResult}`);
    console.log(`${styles.dim('===')} ${expectedResult}`);

    if (generatedResult === expectedResult) {
      console.log(`${styles.dim('>>>')} ${styles.success(' PASSED ')}`);
    } else {
      console.log(`${styles.dim('>>>')} ${styles.fail(' FAILED ')}`);
    }

    console.log('');
  });
};

module.exports = compare;
