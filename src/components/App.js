import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Bookings from './Bookings';
import NewBooking from './NewBooking';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/bookings' component={Bookings} />
          <Route exact path='/bookings/create' component={NewBooking} />
        </div>
      </BrowserRouter>
    );
  };
};

export default App;