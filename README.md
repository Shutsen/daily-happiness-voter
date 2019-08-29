# The Daily Happiness Voter
Heyy! Let's vote happy faces!

This project is a showcase with:

* node.js, Koa and knex in the backend
* vue.js in the frontend
* postgres as a database

## After setup
When you seed your database, you have 4 users, all with the password '12345'. You can login using this pass and one of the emails:

Everyone can vote their happiness level of the day. Only managers can view the insights page.

* cor@tisone.com (employee)
* brik@olage.com (employee)
* conny@komen.com (employee)
* magda@wel.com (manager)

## Project setup

To run this locally, create a postgres database "happiness_voter"

Add a new ".env" file in your root directory with the following variables:
```
PORT=3000
JWT_KEY=secret
DATABASE_HOST=localhost
DATABASE_NAME=happiness_voter
```

## Install dependencies
```
npm install
```

### Run the server
```
npm run server
```

### Database setup
Globally install the knex package, to seed your database and to use the knex command scripts, which you can find in package.json
```
npm i -g knex
npm run database:setup
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
