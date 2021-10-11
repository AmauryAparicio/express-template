# Amaury Express Template

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Usage

```sh
$ npx panfilo-express-template my-app
$ cd my-app
$ npm run dev
```

---

## Highlights

- [Amaury Express Template](#amaury-express-template)
  - [Usage](#usage)
  - [Highlights](#highlights)
  - [Usage with options](#usage-with-options)
  - [Templates](#templates)
  - [Main folders](#main-folders)
  - [.env file](#env-file)
  - [folders](#folders)
  - [Scripts](#scripts)
  - [Libraries](#libraries)

## Usage with options

```sh
$ npx use-express-template --help 

    Usage
   $ create-express-template <FolderName>

   FolderName can be:
     Folder name can be anything without a space

 Options
      --template            Name of the template(default:TypeScript)
      --default(-d)         Use default template
      --yarn(-y)            Use Yarn

 Examples
   $ create-express-template
   $ create-express-template my-app
   $ create-express-template my-app -d
   $ create-express-template my-app --template=TypeScript -y
   $ create-express-template my-app --template=ts -y

```

The `folderName` and the `template` will be prompted to the user via the interactive ui in case these are not specified.

Using the `default` option will use TypeScript as the template.

If you want to use `yarn` as your package manager(by default we use `npm`), specify the `yarn` option.

The available templates(you can use the full names or the initials) are listed [here](#templates).

## Templates

| Template                      | Initials    | Details
| :---                          |    :----:   | :---
| JavaScript                    | js          | Plain JavaScript Template
| TypeScript                    | ts          | Plain TypeScript Template

**Note : The `template` option can take any of these template values or their initials.**

All the values for the database port and name and other settings are stored in the `.env` file which you can change to whatever value which you want to use.

## Main folders

- You will start with 3 folders:
  - src: Main files
  - public: All static files here
  - tests: Make your tests here

---

## .env file

We use [dotenv](https://www.npmjs.com/package/dotenv) to manage our environment variables. Please note that all the ports and database names can be changed in the `.env` file to the value you want to use.

- Configure your MongoDB with these variables:
  - PORT: The port you will use for your project, this is optional, by default will run in port 3000.
  - PRODUCTION_DB: Your MongoDB database url for production
  - DEV_DB: Your MongoDB database url for development
  - TEST_DB: Your MongoDB database url for testing
  - SECRET_JWT_SEED: Your secret seed for JWT

*Note: If you dont configure an url for production and you deploy your project to production, you will have an error; same for other database urls here.*

---

## folders

- You have a set of folders to begin with, these are:
  - controllers: Save here the controllers for your app
  - database: Here lays the database configuration
  - helpers: Save halper files
  - middlewares: Save custom middlewares here
  - models: Save the models for your controllers
  - router: Save the router configurations here

---

## Scripts

- "dev": run a nodemon server with hot reload
- "build": compile typescript into build files _(Just for TypeScript template)_
- "start": runs a node server for production
- "test": runs Jest for testing with hot reload

---

## Libraries

Here are the external libraries that the template use:

- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/es/)
- [express-validator](https://express-validator.github.io/docs/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Moment.js](https://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [TypeScript](https://www.typescriptlang.org/)

[npm-url]: https://www.npmjs.com/package/@panfilo/express-template
[npm-image]: http://img.shields.io/npm/v/@panfilo/express-template.svg
[downloads-image]: http://img.shields.io/npm/dm/@panfilo/express-template.svg
