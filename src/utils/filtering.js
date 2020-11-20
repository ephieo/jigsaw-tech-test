const e = require('express');

function length(data, searchName) {
  return data.filter((e) => e.category === `${searchName}`).length;
}

let count = 0;

function filterDate(data, searchDate) {
  //   console.log('filter', data);
  return data.filter((e) =>
    new Date(e.paymentDate).toString().includes(`${searchDate}`)
  );
}

function getTotalValue(data, searchName) {
  return data
    .filter((e) => e.category === `${searchName}`)
    .map((obj) => {
      return obj.amount;
    })
    .reduce((a, b) => a + b);
}

function getTotalAverage(data, searchName) {
  return (
    data
      .filter((e) => e.category === `${searchName}`)
      .map((obj) => {
        return obj.amount;
      })
      .reduce((a, b) => a + b) /
    data.filter((e) => e.category === `${searchName}`).length
  );
}

module.exports = { length, getTotalValue, getTotalAverage, filterDate };
