const { updateBooking } = require('../models/bookings');

const editBooking = (req, res, next) => {
  const { bookingId } = req.params;
  const data = req.body.bookingToUpdate;
  updateBooking(bookingId, data)
    .then(updateBooking => res.status(200).send({ updateBooking }))
    .catch(next);
};

module.exports = { editBooking };