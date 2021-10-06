# Amaury Express Template

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Quick Overview

```sh
npx @panfilo/express-template my-app
cd my-app
npm start
```

---

## Main folders

+ You will start with 2 folders:
  + src: Main Typescript files
  + public: All static files here

---

## Empty folders

+ You have a set of empty folders to begin with, these are:
  + controllers: Save here the controllers for your app
  + database: Here lays the database configuration
  + helpers: Save halper files
  + middlewares: Save custom middlewares here
  + models: Save the models for your controllers
  + router: Save the router configurations here

---

## Scripts

+ "dev": run a typescript node server with hot reload
+ "build": compile typescript into build files
+ "start": runs a node server for the build files

---

## Libraries

Here are the external libraries that the template use:

+ [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
+ [cors](https://www.npmjs.com/package/cors)
+ [dotenv](https://www.npmjs.com/package/dotenv)
+ [express](https://expressjs.com/es/)
+ [express-validator](https://express-validator.github.io/docs/)
+ [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
+ [Moment.js](https://momentjs.com/)
+ [Mongoose](https://mongoosejs.com/)

[npm-url]: https://www.npmjs.com/package/@panfilo/express-template
[npm-image]: http://img.shields.io/npm/v/@panfilo/express-template.svg
[downloads-image]: http://img.shields.io/npm/dm/@panfilo/express-template.svg
