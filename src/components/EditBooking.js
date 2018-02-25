import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
const _ = require('underscore');
const moment = require('moment');

class NewBooking extends Component {
  state = {
    bookingToUpdate: {},
    loading: true
  };

  componentDidMount() {
    fetch('http://localhost:4000/booking')
      .then(res => res.json())
      .then(({ bookings }) => {
        const { bookingId } = this.props.match.params;
        const bookingToUpdate = _.find(bookings, (booking) => booking.bookingId === Number(bookingId));
        bookingToUpdate.bookingTime = moment(bookingToUpdate.bookingTime).format('YYYY-MM-DDTHH:mm');
        this.setState({ bookingToUpdate, loading: false })
      });
  };

  render() {
    const { bookingToUpdate, loading } = this.state;
    return (
      !loading &&
      <div>
        <h5><b>Edit Booking</b></h5>
        <form onSubmit={this.handleBooking}>
          <div className='form-group'>
            <label>Contact Name</label>
            <input type='text' className='form-control' id='contactName' value={bookingToUpdate.contactName} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Contact Number</label>
            <input type='tel' className='form-control' id='contactNumber' value={bookingToUpdate.contactNumber} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Number of People</label>
            <input type='number' className='form-control' id='numberOfPeople' value={bookingToUpdate.numberOfPeople} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Table Number</label>
            <input type='number' className='form-control' id='tableNumber' value={bookingToUpdate.tableNumber} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Booking Time</label>
            <input type='datetime-local' className='form-control' id='bookingTime' placeholder='dd/mm/yyyy --:--' value={bookingToUpdate.bookingTime} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Save</button>
        </form>
      </div>
    );
  };

  handleChange = event => {
    const { bookingToUpdate } = this.state;
    bookingToUpdate[event.target.id] = event.target.value;
    this.setState({ bookingToUpdate });
  }

  handleBooking = event => {
    event.preventDefault();
    const { bookingId } = this.props.match.params;
    const updatedBooking = this.state.bookingToUpdate;

    fetch(`http://localhost:4000/booking/edit/${bookingId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedBooking),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => {
        if (res.status === 200) this.props.history.push('/');
      });
  };
};

export default withRouter(NewBooking);