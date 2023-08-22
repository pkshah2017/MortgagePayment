# MortgagePayment
 
Welcome to Mortage Payment, a simple mortgage loan calculator application. 
This application can help you identify your loan payment plan based on your 
loan principal, intrest rate, and the number of payments you plan to make. 

This app was built using NextJS, a React framework. State is maintained via 
React and Redux, testing is managed via cypress.

# Setup

To install simply run

`npm i`

# Running Locally

To run the application locally simply run `npm run dev`. This will spin up 
a webserver and host the content at `localhost:3000` by default. 

# Building

To build the application run `npm run build`

# Testing

Currently this app only contain E2E testing, component testing is coming soon. 
Cypress is the test manager, you can invoke e2e tests via 

`npm run e2e`

If you wish to run the tests in a headless environement you can run

`npm run e2e:headless`



# Technical Limits

- Designed for screens with a width of at least 800 px
