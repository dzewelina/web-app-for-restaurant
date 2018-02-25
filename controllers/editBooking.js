const { updateBooking } = require('../models/bookings');

const editBooking = (req, res, next) => {
  const { bookingId } = req.params;
  const data = req.body;
  updateBooking(bookingId, data)
    .then(updatedBooking => {
      res.status(200).send({ updatedBooking })
    })
    .catch(next);
};

module.exports = { editBooking };