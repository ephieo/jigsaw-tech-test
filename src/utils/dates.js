function findDates() {
  let now = new Date(2020, 10, 09);
  let periodOfTime = [];

  for (var i = new Date(2020, 9, 9); i <= now; i.setDate(i.getDate() + 1)) {
    periodOfTime.push(new Date(i).toString());
  }
  //   console.log(periodOfTime);
  return periodOfTime;
}

findDates();

const paymentDates = [
  new Date('2020-10-09T00:00:00.000Z').toString(),
  new Date('2020-10-29T00:00:00.000Z').toString(),
  new Date('2020-10-30T00:00:00.000Z').toString(),
  new Date('2020-11-04T00:00:00.000Z').toString(),
  new Date('2020-11-02T00:00:00.000Z').toString(),
  new Date('2020-10-19T00:00:00.000Z').toString(),
  new Date('2020-10-13T00:00:00.000Z').toString(),
  new Date('2020-10-28T00:00:00.000Z').toString(),
  new Date('2020-10-20T00:00:00.000Z').toString(),
  new Date('2020-10-16T00:00:00.000Z').toString(),
  new Date('2020-10-12T00:00:00.000Z').toString(),
  new Date('2020-10-22T00:00:00.000Z').toString(),
  new Date('2020-10-14T00:00:00.000Z').toString(),
];

module.exports = { findDates, paymentDates };
