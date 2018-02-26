# Web Application for restaurant to manage table bookings
## About

Project contains:

 - Backend part: 
 
 A RESTful API built with ```Node.js``` and ```Express.js```.
 Testing was carried out using ```Mocha```, ```Chai``` and ```Supertest```.
 - Frontend part: 
 
 Displays all bookings within a table and ordered by booking time. Bookings with more than 6 diners are displayed as red and bookings with only 1 diner as blue. An option to add a new booking is available by clicking 'New Booking' button. Existing booking can be edited by clicking booking row. Built with ```React.js```.

## Setup

You will need Node.js, npm and git installed before being able to run this project.

- To check if ```Node.js``` is installed on your machine open a terminal window and enter:
  ```
  $ node -v
  ```
  If you do not already have Node.js installed follow the instructions on [this guide](https://nodejs.org/en/download/package-manager/).

- To check if ```npm``` is installed on your machine enter this command in you terminal window: 
  ```
  $ npm -v
  ```
  If you do not have npm already installed follow [this guide](https://www.npmjs.com/get-npm) to set it up.

- To check if ```git``` is installed on your machine enter the following in your terminal window: 
  ```
  $ git --version
  ```
  If you do not already have git installed on your machine follow [this guide](https://git-scm.com/).

## Installation

To run this project you will need to clone this repository onto your local machine.
  ```
  $ git clone https://github.com/dzewelina/web-app-for-restaurant.git
  ```
Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:
  ```
  $ cd web-app-for-restaurant
  $ npm install
  ```
To run the server enter the following command in your terminal window: 
  ```
  $ npm run dev
  ```
This will run server on port 4000. All endpoint can be fount locally on http://localhost:4000.

Open another terminal window and enter the following command to run the application locally:
  ```
  $ npm start
  ```
The application will run on http://localhost:3000.

## Testing

To test the API navigate to the project directory and enter the following command:
  ```
  $ npm test
  ```

## API Routes
```
GET /booking
```
Returns all the bookings

```
POST /booking/create
```
Adds a new booking

```
PUT /booking/edit
```
Updates existing booking

## Next steps
- Form validation
- Database instead of JSON file
- Error handling
- Frontend testing