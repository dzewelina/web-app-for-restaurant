const { fetchAllBookings } = require('../models/bookings');

const getAllBookings = (req, res, next) => {
  fetchAllBookings()
    .then(bookings => res.send({ bookings }))
    .catch(next);
};

module.exports = { getAllBookings };