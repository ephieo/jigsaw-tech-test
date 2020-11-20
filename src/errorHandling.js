function errorHandling(error, _, res, next) {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
}

module.exports = errorHandling;

// app.use((error, _, res, next) => {
//   console.error(error);
//   res.status(error.status || 500).json({ message: error.message });
//   next();
// });
