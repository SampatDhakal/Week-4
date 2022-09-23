const { csvtojson, json2csv } = require('./csv-db.js');
const { runTests, defineTest, assertEqual, assertNotEqual, assertThrowsError } = require('./test-utils.js');
var isEqual = require('lodash.isequal');
const fs = require('fs');

defineTest('Converting CSV to JSON', () => {
  const source = fs.readFileSync('./users-export.csv', 'utf8');
  const obtained = csvtojson(source)
  const expected = [
    { name: 'John Doe', address: ' New York', dob: ' 1992-12-03' },
    { name: 'Jane Doe', address: ' Kathmandu', dob: ' 1999-09-30' }
  ];
  if (isEqual(obtained, expected)) {
    console.log('equal')
  } else {
    throw new Error('Not equal')
  }
})

defineTest('Converting JSON to CSV', () => {
  const source = [
    { name: 'John Doe', address: ' New York', dob: ' 1992-12-03' },
    { name: 'Jane Doe', address: ' Kathmandu', dob: ' 1999-09-30' }
  ];
  const obtained = json2csv(source)
  const expected = fs.readFileSync('./users-export.csv', 'utf8')
  if (isEqual(obtained, expected)) {
    console.log('equal')
  } else {
    throw new Error('Not equal')
  }
})

runTests()


