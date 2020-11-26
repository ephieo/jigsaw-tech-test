const chai = require('chai');
const rp = require('request-promise');

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
});
