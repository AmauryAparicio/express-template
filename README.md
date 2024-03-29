# Amaury Express Template

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Usage

```sh
npx use-express-template my-app
cd my-app
npm run dev
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
   $ use-express-template <FolderName>

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
| JavaScript Lite               | tsl         | Plain TypeScript Template with less dependencies
| TypeScript Lite               | tsl         | Plain TypeScript Template with less dependencies

**Note : The `template` option can take any of these template values or their initials.**

All the values for the database port and name and other settings are stored in the `.env` file which you can change to whatever value which you want to use.

Lite versions do not have Documentation with Swagger nor File parser with cloudinary*

## Main folders

- You will start with 3 folders:
  - src: Main files
  - public: All static files here
  - tests: Make your tests here

---

## .env file

We use [dotenv](https://www.npmjs.com/package/dotenv) to manage our environment variables. Please note that all the ports and database names can be changed in the `.env` file to the value you want to use.

- Configure your project with these variables:
  - PORT: The port you will use for your project, this is optional, by default will run in port 3000.
  - PRODUCTION_DB: Your MongoDB database url for production
  - DEV_DB: Your MongoDB database url for development
  - TEST_DB: Your MongoDB database url for testing
  - SECRET_JWT_SEED: Your secret seed for JWT
  - CLOUD_NAME: Your cloudinary cloud name __Not in Lite version__
  - CLOUD_KEY: Your cloudinary public key __Not in Lite version__
  - CLOUD_SECRET: Your cloudinary secret key __Not in Lite version__

**Note: If you dont configure an url for production and you deploy your project to production, you will have an error; same for other database urls here.**

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
- [cloudinary](https://cloudinary.com/)
- [cors](https://www.npmjs.com/package/cors)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-validator](https://express-validator.github.io/docs/)
- [express](https://expressjs.com/es/)
- [Jest](https://jestjs.io/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Moment.js](https://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
- [multer](https://www.npmjs.com/package/multer)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [Supertest](https://www.npmjs.com/package/supertest)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [ts-node](https://typestrong.org/ts-node/)
- [TypeScript](https://www.typescriptlang.org/)

[npm-url]: https://www.npmjs.com/package/use-express-template
[npm-image]: http://img.shields.io/npm/v/use-express-template.svg
[downloads-image]: http://img.shields.io/npm/dm/use-express-template.svg
