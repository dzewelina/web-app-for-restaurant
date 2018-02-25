const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const _ = require('underscore');

const filePath = path.join(__dirname, '../data/bookings.json');

const fetchAllBookings = () => {
  return fs.readFileAsync(filePath, 'utf8')
    .then(bookings => JSON.parse(bookings));
};

const createNewBooking = (data) => {
  return fs.readFileAsync(filePath, 'utf8')
    .then(bookings => {
      bookings = JSON.parse(bookings);
      const maxId = Math.max(...bookings.map(booking => booking.bookingId));

      data.bookingId = maxId + 1;
      bookings.push(data);
      return fs.writeFileAsync(filePath, JSON.stringify(bookings));
    })
    .then(() => data);
};

const updateBooking = (bookingId, data) => {
  return fs.readFileAsync(filePath, 'utf8')
    .then(bookings => {
      bookings = JSON.parse(bookings);
      const bookingToUpdate = _.find(bookings, (booking) => booking.bookingId === Number(bookingId));
      const index = _.indexOf(bookings, bookingToUpdate)
      if (bookingToUpdate !== undefined) bookings[index] = data;
      return fs.writeFileAsync(filePath, JSON.stringify(bookings));
    })
    .then(() => data)
}

module.exports = { fetchAllBookings, createNewBooking, updateBooking };