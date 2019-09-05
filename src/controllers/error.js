exports.clientError = (req, res) => {
  res.status(404).send('page not found');
};


// eslint-disable-next-line no-unused-vars
exports.serverError = (error, req, res, next) => {
  console.log(error);
  res.status(500).send('Internal server error');
};
