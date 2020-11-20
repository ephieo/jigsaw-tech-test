const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

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
      res.send(
        result.map((obj) => ({
          category: obj.category,
        }))
      )
    )
    .catch(next);
});
///// get request for all transactions arrange by their category names
router.get('/categories/food', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send({
        Food: {
          totalNumber: result.filter((e) => e.category === 'Food').length,
          totalValue: result
            .filter((e) => e.category === 'Food')
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
          averageValue:
            result
              .filter((e) => e.category === 'Food')
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) => e.category === 'Food').length,
        },
      })
    )
    .catch(next);
});
router.get('/categories/Miscellaneous', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send({
        Miscellaneous: {
          totalNumber: result.filter((e) => e.category === 'Miscellaneous')
            .length,
          totalValue: result
            .filter((e) => e.category === 'Miscellaneous')
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
          averageValue:
            result
              .filter((e) => e.category === 'Miscellaneous')
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) => e.category === 'Miscellaneous').length,
        },
      })
    )
    .catch(next);
});

router.get('/categories/Charity', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send({
        Charity: {
          totalNumber: result.filter((e) => e.category === 'Charity').length,
          totalValue: result
            .filter((e) => e.category === 'Charity')
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
          averageValue:
            result
              .filter((e) => e.category === 'Charity')
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) => e.category === 'Charity').length,
        },
      })
    )
    .catch(next);
});

router.get('/categories/Travel', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send({
        Travel: {
          totalNumber: result.filter((e) => e.category === 'Travel').length,
          totalValue: result
            .filter((e) => e.category === 'Travel')
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
          averageValue:
            result
              .filter((e) => e.category === 'Travel')
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) => e.category === 'Travel').length,
        },
      })
    )
    .catch(next);
});
router.get('/categories/Transport', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send({
        Transport: {
          totalNumber: result.filter((e) => e.category === 'Transport').length,
          totalValue: result
            .filter((e) => e.category === 'Transport')
            .map((obj) => {
              return obj.amount;
            })
            .reduce((a, b) => a + b),
          averageValue:
            result
              .filter((e) => e.category === 'Transport')
              .map((obj) => {
                return obj.amount;
              })
              .reduce((a, b) => a + b) /
            result.filter((e) => e.category === 'Transport').length,
        },
      })
    )
    .catch(next);
});

router.get('/cashflow', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((res) => res.json())
    .then((result) =>
      res.send(
        result.filter((obj) => obj.paymentDate === '2020-10-09T00:00:00.000Z')
      )
    )
    .catch(next);
});

module.exports = router;
