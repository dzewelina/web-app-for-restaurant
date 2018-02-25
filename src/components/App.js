import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Bookings from './Bookings';
import NewBooking from './NewBooking';
import EditBooking from './EditBooking';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Bookings} />
          <Route exact path='/create' component={NewBooking} />
          <Route exact path='/edit/:bookingId' component={EditBooking} />
        </div>
      </BrowserRouter>
    );
  };
};

export default App;