const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res, next) => {
  fetch('http://54.154.227.172:3000/transactions')
    .then((response) => response.json())
    .then((result) => res.send(result))
    .catch(next);
});

router.get('/categories', async (req, res, next) => {
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
  // try {
  //   res.status(501).json({ message: 'Not Implemented' });
  // } catch (err) {
  //   return next(err);
  // }
});

router.get('/cashflow', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
