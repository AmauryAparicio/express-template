"use strict";

const { readdirSync } = require("fs");
const { join } = require("path");
const { prompt } = require("inquirer");
const { isValidTemplate } = require("./util");

module.exports = async (options, destinationFolder) => {
  const pkgManager = options.yarn ? "yarn" : "npm";
  let template = options.default ? "TypeScript" : null;
  template = options.template ? options.template : template;
  const choices = readdirSync(join(__dirname, "templates"));
  template = template ? isValidTemplate(template, choices) : null;
  if (destinationFolder && template) {
    return {
      ...options,
      destinationFolder: destinationFolder,
      pkgManager: pkgManager,
      template: template,
    };
  }

  const prompts = [];
  if (!destinationFolder) {
    prompts.push({
      name: "name",
      type: "input",
      message: "Project name:",
    });
  }
  if (template == null) {
    prompts.push({
      name: "template",
      type: "list",
      message: "What project template would you like to generate?",
      choices: choices,
    });
  }

  const answers = await prompt(prompts);

  return {
    ...options,
    pkgManager: pkgManager,
    destinationFolder: answers.name || destinationFolder,
    template: answers.template || template,
  };
};
