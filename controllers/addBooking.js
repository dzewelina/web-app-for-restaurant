const { createNewBooking } = require('../models/bookings');

const addBooking = (req, res, next) => {
  const data = req.body;
  createNewBooking(data)
    .then(newBooking => res.status(201).send({ newBooking }))
    .catch(next);
};

module.exports = { addBooking };