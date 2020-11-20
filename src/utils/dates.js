function findDates() {
  let now = new Date(2020, 10, 09);
  let periodOfTime = [];

  for (var i = new Date(2020, 9, 9); i <= now; i.setDate(i.getDate() + 1)) {
    periodOfTime.push(new Date(i).toLocaleString().split(',')[0]);
  }

  return periodOfTime;
}

findDates();

const paymentDates = {
  '09/10/2020': {},
  '29/10/2020': {},
  '30/10/2020': {},
  '04/11/2020': {},
  '02/11/2020': {},
  '19/10/2020': {},
  '13/10/2020': {},
  '28/10/2020': {},
  '20/10/2020': {},
  '16/10/2020': {},
  '12/10/2020': {},
  '22/10/2020': {},
  '14/10/2020': {},
};

module.exports = { findDates, paymentDates };
