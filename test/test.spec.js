const chai = require('chai');
const rp = require('request-promise');

const assert = require('chai').assert;

const {
  length,
  getTotalValue,
  getTotalAverage,
  filterDate,
} = require('./../src/utils/filtering');

const findDates = require('./../src/utils/dates');
chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:3000/insights/${path}`,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body.
    simple: false, // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe('Insights Service', () => {
  describe('/categories', () => {
    context('rendering transactions by category', () => {
      it('should return a 200 status', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(200);
      });
    });
  });
  describe('/cashflow', () => {
    context('rendering transactions by date', () => {
      it('should return a 200 status code', async () => {
        const response = await request('/cashflow');
        response.statusCode.should.equal(200);
      });
    });
  });
  describe('filterDate', () => {
    it('filters to return transactions by date', () => {
      let result = filterDate();
      should.typeOf(result, 'array');
    });
  });
  describe('getTotalValue', () => {
    it('returns sum of array', () => {
      let result = getTotalValue();
      should.typeOf(result, 'integer');
    });
  });
  describe('length', () => {
    it('returns length of array', () => {
      let result = length();
      should.typeOf(result, 'integer');
    });
  });
  describe('getTotalAverage', () => {
    it('retrns the average of transactions it recieves', () => {
      let result = getTotalAverage();
      should.typeOf(result, 'integer');
    });
  });

  describe('findDates', () => {
    it('returns array of dates starting from first transaction to the most recent transaction', () => {
      let result = findDates();
      should.equal.typeOf(result, 'array');
    });
  });
});
