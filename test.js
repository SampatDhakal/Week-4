const { csvtojson, json2csv } = require('./csv-db.js');
const { runTests, defineTest, assertEqual, assertNotEqual, assertThrowsError } = require('./test-utils.js');
var isEqualWith = require('lodash.isequalwith');
const fs = require('fs');
let result = [];

defineTest('Converting CSV to JSON', () => {
    const source = fs.readFileSync('./users-export.csv', 'utf8');
    const expected = {name,address,dob
    John Doe, New York, 1992-12-03
    Jane Doe, Kathmandu, 1999-09-30}
    const obtained = csvtojson(source)
    console.log(obtained)
    // const keysInObtained = Object.keys(obtained)
    // const keysInExpected = Object.keys(expected)
    // assertEqual(keysInObtained.length, keysInExpected.length, 'Should have same number of keys')
    // assertEqual(keysInObtained.every(argKey => keysInExpected.includes(argKey)), true, 'Should have same keys')
    // assertEqual(keysInObtained.every(key => obtained[key] === expected[key]), true, 'Each key should have the same values')
  })
  
  runTests()


