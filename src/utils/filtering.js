function length(data, searchName) {
  return data.filter((e) => e.category === `${searchName}`).length;
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

module.exports = { length, getTotalValue, getTotalAverage };
