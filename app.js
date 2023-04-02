const fs = require('fs');

fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  const countries = JSON.parse(data).countries;
  console.table(countries);
});