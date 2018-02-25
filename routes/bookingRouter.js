const router = require('express').Router();
const { getAllBookings } = require('../controllers/getAllBookings');
const { addBooking } = require('../controllers/addBooking');

router.route('/')
  .get(getAllBookings);

router.route('/create')
  .post(addBooking);

module.exports = router;