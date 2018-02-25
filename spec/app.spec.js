process.env.NODE_ENV = 'test';

const request = require('supertest');
const { expect } = require('chai');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const filePath = path.join(__dirname, '../data/bookings.test.json');
const _ = require('underscore');
const app = require('../server');

describe('/api', () => {
  let content;

  after(() => {
    return fs.writeFileAsync(filePath, JSON.stringify(content));
  });

  it('GET /booking returns an object with all bookings', () => {
    return request(app)
      .get('/booking')
      .expect(200)
      .then(res => {
        content = res.body.bookings;
        expect(res.body).to.be.an('object');
        expect(res.body.bookings).to.be.an('array');
        expect(res.body.bookings.length).to.equal(4);
      });
  });
  it('POST /booking/create adds a new booking and returns an object with new booking', () => {
    const newBooking = {
      contactName: 'Ryan Reynolds',
      contactNumber: '07751251333',
      numberOfPeople: 2,
      tableNumber: 2,
      bookingTime: '2017-12-04T13:35'
    }
    return request(app)
      .post('/booking/create')
      .send(newBooking)
      .expect(201)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.newBooking).to.be.an('object');
        expect(res.body.newBooking.bookingId).to.equal(5);
        return request(app)
          .get('/booking');
      })
      .then(res => {
        expect(res.body.bookings.length).to.equal(5);
      })
  });
  it('PUT /booking/edit updates booking and returns an object with updated booking', () => {
    const updatedBooking = {
      bookingId: 1,
      contactName: 'Ryan R',
      contactNumber: '07751251333',
      numberOfPeople: 2,
      tableNumber: 2,
      bookingTime: '2017-12-08T13:35'
    }
    return request(app)
      .put('/booking/edit/1')
      .send(updatedBooking)
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.updatedBooking).to.be.an('object');
        expect(res.body.updatedBooking.bookingId).to.equal(1);
        expect(res.body.updatedBooking.contactName).to.equal('Ryan R');
        return request(app)
          .get('/booking');
      })
      .then(res => {
        expect(res.body.bookings.length).to.equal(5);
        const updatedBooking = _.find(res.body.bookings, (booking) => booking.bookingId === 1);
        expect(updatedBooking.contactName).to.equal('Ryan R');
      });
  });
});