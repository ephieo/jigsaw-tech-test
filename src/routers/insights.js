const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { findDates, paymentDates } = require('./../utils/dates');
const {
  length,
  getTotalValue,
  getTotalAverage,
  filterDate,
} = require('./../utils/filtering');

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
    .then((result) =>
      res.send({
        Food: {
          totalNumber: length(result, 'Food'),
          totalValue: getTotalValue(result, 'Food'),
          averageValue: getTotalAverage(result, 'Food'),
        },
        Miscellaneous: {
          totalNumber: length(result, 'Miscellaneous'),
          totalValue: getTotalValue(result, 'Miscellaneous'),
          averageValue: getTotalAverage(result, 'Miscellaneous'),
        },
        Charity: {
          totalNumber: length(result, 'Charity'),
          totalValue: getTotalValue(result, 'Charity'),
          averageValue: getTotalAverage(result, 'Charity'),
        },
        Travel: {
          totalNumber: length(result, 'Travel'),
          totalValue: getTotalValue(result, 'Travel'),
          averageValue: getTotalAverage(result, 'Travel'),
        },
        Transport: {
          totalNumber: length(result, 'Transport'),
          totalValue: getTotalValue(result, 'Transport'),
          averageValue: getTotalAverage(result, 'Transport'),
        },
      })
    )
    .catch(next);
});

///// get request for all transactions by date.

router.get('/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => {
      let filter = findDates().map((e) => {
        return paymentDates.includes(e)
          ? { e: filterDate(result, e) }
          : {
              date: {
                totalNumber: 0,
                totalValue: 0,
                averageValue: 0,
              },
            };
      });

      res.send(filter);
    })
    .catch(next);
});

router.get('/cashflow/1', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => {
      let obj = paymentDates.map((date) => {
        console.log(date);
        return {
          date: `${date}`,
          totalNumber: result.filter((e) =>
            new Date(e.paymentDate).toString().includes(`${date}`)
          ).length,
          averageValue:
            result
              .filter((e) =>
                new Date(e.paymentDate).toString().includes(`${date}`)
              )
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) =>
              new Date(e.paymentDate).toString().includes(`${date}`)
            ).length,
          totalValue: result
            .filter((e) =>
              new Date(e.paymentDate).toString().includes(`${date}`)
            )
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
        };
      });

      res.send(obj);
    })
    .catch(next);
});
module.exports = router;
// "03/01/2019": {
//   "totalNumber": 0,
//   "totalValue": 0,
//   "averageValue": 0
// }
