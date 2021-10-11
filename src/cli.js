#!/usr/bin/env node

"use strict";

const meow = require("meow");
const { success, error: _error } = require("log-symbols");
const generate = require(".");
const ui = require("./ui");

const cli = meow(
  `
	Usage
	  $ @panfilo/express-template <FolderName>

	  FolderName can be:
	    Folder name can be anything without a space

	Options
      --template               Name of the template(default:TypeScript)
      -d --default             Use default template
      -y --yarn                Use Yarn

	Examples
	  $ create-express-template
	  $ create-express-template my-app
	  $ create-express-template my-app -d
	  $ create-express-template my-app --template=TypeScript
	  $ create-express-template my-app --template=ts -y
`,
  {
    flags: {
      template: {
        type: "string",
      },
      default: {
        type: "boolean",
        alias: "d",
      },
      yarn: {
        type: "boolean",
        alias: "y",
      },
    },
  }
);

(async () => {
  const defaultFlags = {
    default: false,
    yarn: false,
  };

  const flags = {
    ...defaultFlags,
    ...cli.flags,
  };

  const destFolder = cli.input.length > 0 ? cli.input[0] : false;

  const options = await ui({ ...flags }, destFolder);

  console.log(); // Prints a newline for readability
  // eslint-disable-next-line no-unused-vars
  const created = await generate(options);
  console.log(`\n${success} Template created and dependencies installed`);
})().catch(error => {
  console.error(`\n${_error} ${error.message}`);
  process.exit(1);
});
