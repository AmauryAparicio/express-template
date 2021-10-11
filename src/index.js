"use strict";

const { join } = require("path");
const { editPackageJson, installNodeModules } = require("./util");
const { createProject, createDirectoryContents } = require("./create");
const { success } = require("log-symbols");

module.exports = async input => {
  const CURR_DIR = process.cwd();
  const templatePath = join(__dirname, "templates", input.template);
  const targetPath = join(CURR_DIR, input.destinationFolder);
  if (createProject(targetPath)) {
    createDirectoryContents(templatePath, input.destinationFolder);
  }
  console.log(`\n${success} Created template`);
  console.log(`Installing dependecies using ${input.pkgManager}...`);
  editPackageJson(`${targetPath}/package.json`, input.destinationFolder);
  await installNodeModules(input.pkgManager, targetPath);
  return;
};
