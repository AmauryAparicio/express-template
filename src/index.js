"use strict";

const { execSync } = require("child_process");
const path = require("path");
const util = require("./util");
const create = require("./create");
const logSymbols = require("log-symbols");
const fs = require("fs");

module.exports = async input => {
  const CURR_DIR = process.cwd();
  const templatePath = path.join(__dirname, "templates", input.template);
  const targetPath = path.join(CURR_DIR, input.destinationFolder);
  if (create.createProject(targetPath)) {
    create.createDirectoryContents(templatePath, input.destinationFolder);
  }
  console.log(`\n${logSymbols.success} Created template`);
  console.log(`Installing dependecies using ${input.pkgManager}...`);
  util.editPackageJson(`${targetPath}/package.json`, input.destinationFolder);
  await util.installNodeModules(input.pkgManager, targetPath);
  fs.appendFile(
    `${targetPath}/.gitignore`,
    "node_modules \n build \n package-lock.json \n .env",
    () => {
      execSync(
        `cd ${targetPath} && git init && git add --all && git commit -m 'First Commit' & cd ..`
      );
    }
  );

  return;
};
