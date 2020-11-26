const test = require('tape');
const { findDates } = require('./../src/utils/dates');
const testFetchData = require('./testFetchData');

const {
  length,
  getTotalValue,
  getTotalAverage,
} = require('../src/utils/categoryFiltering');

test('testing that dates function returns an array of dates', (t) => {
  t.equal(
    typeof findDates() === 'object',
    true,
    'should return true if an array is returned'
  );
  t.end();
});

test('testing that this function returns the length of a filtered array', (t) => {
  t.equal(
    length(testFetchData, 'Food', 'category'),
    24,
    'should return the length of a filtered array conmtaining twenty-four food transactions'
  );
  t.end();
});

test('testing that this function returns the sum of the amounts spent for this category', (t) => {
  t.equal(
    getTotalValue(testFetchData, 'Food'),
    2679,
    'should return the sum total of all transactions for Food'
  );
  t.end();
});
test('testing that this function returns the average of all food transactions', (t) => {
  t.equal(
    getTotalAverage(testFetchData, 'Food'),
    111.625,
    'should return the average for all Food transactions '
  );
  t.end();
});
