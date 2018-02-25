const router = require('express').Router();
const { getAllBookings } = require('../controllers/getAllBookings');
const { addBooking } = require('../controllers/addBooking');
const { editBooking } = require('../controllers/editBooking');

router.route('/')
  .get(getAllBookings);

router.route('/create')
  .post(addBooking);

router.route('/edit/:bookingId')
  .put(editBooking);

module.exports = router;