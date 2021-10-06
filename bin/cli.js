#! /usr/bin/env node

/**
 * Create a funtion to manage commands
 */
const { execSync } = require("child_process");

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

/**
 * Get the new repository name
 */

const repoName = process.argv[2];

/**
 * Get the platform
 */

const os = require("os").platform();

const isWindows = /^win/.test(os);

/**
 * Clone the repository
 */

const gitCheckoutCommand = `git clone --depth 1 https://github.com/AmauryAparicio/express-template ${repoName}`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

/**
 * Initialize the new repository
 */

const newRepoCommand = isWindows
  ? `cd ${repoName} && RMDIR /Q/S .git`
  : `cd ${repoName} && rm -r -f .git`;

console.log(`Creating new repository for ${repoName}`);

const createdRepo = runCommand(newRepoCommand);

if (!createdRepo) process.exit(-1);

/**
 * Install dependencies
 */

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

/**
 * Exit
 */

console.log(
  `Congratulations! You are ready. Follow following commands to start.`
);
console.log(`cd ${repoName} && npm run dev`);
