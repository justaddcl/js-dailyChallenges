const regex = /([^a-z\d\s.])/gi;

const sanitize = str => str.trim().replace(regex, '');

const round = num => (Math.round(num * 100) / 100).toFixed(2);

const balance = book => {
  let expenses = 0;
  let [originalBalance, ...lines] = sanitize(book).replace(/\s{2,}/, m => m[0]).split('\n');

  lines = lines.map(line =>
    line.replace(/\S+$/g, m => {
      expenses += parseFloat(m);
      return `${round(parseFloat(m))} Balance ${round(originalBalance - expenses)}`;
    })
  );
  lines.unshift(`Original Balance: ${round(originalBalance)}`);
  lines.push(`Total expense  ${round(expenses)}`);
  lines.push(`Average expense  ${round(expenses / (lines.length - 2))}`);
  return lines.join('\r\n');
};

module.exports = balance;
