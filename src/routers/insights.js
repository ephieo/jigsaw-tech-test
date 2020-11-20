const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { findDates, paymentDates } = require('./../utils/dates');
const {
  length,
  getTotalValue,
  getTotalAverage,
} = require('./../utils/filtering');

//get request for all transactions

router.get('/', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((response) => response.json())
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

router.get('/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) => {
      res.send('hello');
    })
    .catch(next);
});

module.exports = router;
