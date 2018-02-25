const { createNewBooking } = require('../models/bookings');

const addBooking = (req, res, next) => {
  const data = req.body;
  createNewBooking(data)
    .then(newBooking => res.send(newBooking))
    .catch(next);
};

module.exports = { addBooking };