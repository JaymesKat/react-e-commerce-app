## Slick Wear store

This is a e-commerce app built with tools such as Redux, Hooks, GraphQL, ContextAPI, Stripe and Firebase

## Features
- User authentication with Firebase
- Product Catalog
- Shopping Cart and Checkout
- Stripe Payment Integration

## Getting started

### System Requirements

You will need to have the following software installed on your system

- [Nodejs](https://nodejs.org/en/download/), a JavaScript runtime that lets you run applications outside the browser
- NPM, a package manager for Nodejs software packages (Comes with Node)

### Instructions for running application

Clone the repository to your local machine

```
git clone https://github.com/JaymesKat/slick-wear-online-store.git
```

Navigate into root of repository

```
cd slick-wear-online-store
```

Install application dependencies

```
npm install
```

### Running the application

Run the command to launch the application on the local node server
```
npm start
```

### Optional: Setting up checkout with Stripe account

To get the checkout section of the app to integrate with Stripe payments, you will need to set up a free developer account on https://stripe.com/ and create a test API key

Make a copy of the `.env.example` and rename the file `.env` 
Assign the Stripe API key as a value for the key `REACT_APP_STRIPE_PUBLISHABLE_KEY` inside the `.env` file


## Main Libraries Used

* [Reactjs](https://reactjs.org/) - Popular library for building composable UIs
* [Redux](https://redux.js.org) - A library for built to manage state in a predictable manner in frontend applications

## License

This project is licensed under the MIT License
