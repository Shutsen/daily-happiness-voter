# The Daily Happiness Voter
Heyy! Let's vote happy faces!

This project is a showcase with:

* node.js, Koa and knex in the backend
* vue.js in the frontend
* postgres as a database

## Project setup

To run this locally, create a postgres database "happiness_voter"

Add a new ".env" file in your root directory with the following variables:
```
PORT=3000
JWT_KEY=secret
DATABASE_HOST=localhost
DATABASE_NAME=happiness_voter
SENDGRID_API_KEY=<yoursendgridapikey>
```

## Install dependencies
```
npm install
```

### Database setup
Globally install the knex package, to seed your database and to use the knex command scripts, which you can find in package.json
```
npm i -g knex
npm run database:setup
```

### Run the server
```
npm run server
```

### Run local development
```
npm run dev
```

## After setup
When you seed your database, you have 4 users, all with the password '12345'. You can login using this pass and one of the emails:

Everyone can vote their happiness level of the day. Only managers can view the insights page.

* cor@tisone.com (employee)
* brik@olage.com (employee)
* conny@komen.com (employee)
* magda@wel.com (manager)
* ben@dover.com (employee)

To use the app, you can register a new employee or login with an existing one. Only "Magda Wel" has full app functionality - being the only manager.

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```
