const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { findDates, paymentDates } = require('./../utils/dates');
const {
  length,
  getTotalValue,
  getTotalAverage,
} = require('../utils/categoryFiltering');
const {
  dateLength,
  getDateAverage,
  getDateTotalValue,
} = require('../utils/dateFiltering');

router.get('/', async (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => res.send(result))
    .catch(next);
});
///// get request for all transaction categories

router.get('/categories', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => {
      let categories = [
        'Food',
        'Travel',
        'Transport',
        'Miscellaneous',
        'Charity',
      ];
      res.send(
        categories.map((category) => {
          return {
            categoryName: `${category}`,
            totalNumber: length(result, `${category}`),
            totalValue: getTotalValue(result, `${category}`),
            averageValue: getTotalAverage(result, `${category}`),
          };
        })
      );
    })
    .catch(next);
});

///// get request for all transactions by date.

router.get('/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => {
      let transactionObj = paymentDates.map((date) => {
        return {
          date: `${date}`,
          totalNumber: dateLength(result, date),
          averageValue: getDateAverage(result, date),
          totalValue: getDateTotalValue(result, date),
        };
      });
      let noTransactionObj = findDates()
        .filter((e) => !new Date(e.paymentDate).toString().includes(e))
        .map((e) => {
          return {
            date: {
              date:
                new Date(e.paymentDate).toString() <= e ? e : 'not availible',
              totalNumber: 0,
              totalValue: 0,
              averageValue: 0,
            },
          };
        });

      res.send({ transactionObj, noTransactionObj });
    })
    .catch(next);
});
module.exports = router;
