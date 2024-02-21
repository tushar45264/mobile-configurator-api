# Mobile Configurator API

This project is a simple API for configuring and ordering mobile phones with different components. Customers can select the screen type, camera, port, operating system, and body material to customize their mobile phone.
## Project Structure

- **app.js**: The main server file implementing the Express application.
  - Configures the Express app, sets up middleware (e.g., body-parser, cors), and defines routes.

- **routes/**: A folder containing route files.
  - **orderRoute.js**: Contains the orderRoute with default parameters for the routes.
    - Defines routes for handling orders.

- **test.js**: Unit tests for the API using Mocha and Chai.
  - Tests the functionality of the API endpoints.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the server: `npm start`.
4. Execute tests: `npm test`.

## Dependencies

- express
- body-parser
- cors
- mocha
- chai


## Requirements

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation
```bash
1. Clone the repository:
git clone <repository_url>
cd mobile-configurator-api
```
## Install dependencies
```bash
npm install

```
## Usage
#Start the server
```bash
1.node app.js

```
2.Use Postman or any API testing tool to make HTTP requests to the following endpoint:

Endpoint: POST /orders

Request Body (JSON):
```json
{
    "components": ["I", "A", "D", "F", "M"]
}
```

The server will respond with order details if the request is valid.

## Components and Pricing
Customers can configure their mobiles by choosing different components. Each component has a specific price:

Screen: "I" (LED Screen - $50.0), "O" (OLED Screen - $60.0), "A" (AMOLED Screen - $70.0)
Camera: "W" (Wide-Angle Camera - $30.0), "U" (Ultra-Wide-Angle Camera - $40.0)
Port: "C" (USB-C Port - $10.0), "M" (Micro-USB Port - $15.0), "L" (Lightning Port - $20.0)
OS: "D" (Android OS - $80.0), "F" (iOS - $90.0)
Body: "M" (Metallic Body - $100.0), "P" (Plastic Body - $110.0)


## Tests
To run the unit tests, execute the following command:

```bash
npm test
This will run the tests defined in the test.js file using Mocha and Chai.