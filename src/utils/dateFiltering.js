function dateLength(data, date) {
  return data.filter((e) =>
    new Date(e.paymentDate).toString().includes(`${date}`)
  ).length;
}

function getDateAverage(data, date) {
  return (
    data
      .filter((e) => new Date(e.paymentDate).toString().includes(`${date}`))
      .map((obj) => {
        return obj.amount;
      })
      .reduce((a, b) => a + b) /
    data.filter((e) => new Date(e.paymentDate).toString().includes(`${date}`))
      .length
  );
}

function getDateTotalValue(data, date) {
  return data
    .filter((e) => new Date(e.paymentDate).toString().includes(`${date}`))
    .map((obj) => {
      return obj.amount;
    })
    .reduce((a, b) => a + b);
}

module.exports = { dateLength, getDateAverage, getDateTotalValue };
