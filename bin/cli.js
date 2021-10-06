#! /usr/bin/env node

/**
 * Create a funtion to manage commands
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-my-boilerplate my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/AmauryAparicio/express-template";

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

/**
 * Clone the repository
 */

async function main() {
  try {
    console.log("\n Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("\n Installing dependencies...");

    execSync("npm install");

    console.log("\n Removing useless files");

    execSync("npx rimraf ./.git");

    execSync("git init");
    execSync("git add --all");
    execSync("git commit -m 'First Commit'");

    execSync("npx rimraf ./.npmignore");

    fs.rmSync(path.join(projectPath, "bin"), { recursive: true });

    console.log("\n The installation is done, this is ready to use !");

    console.log(
      `\n Congratulations! You are ready. Follow following commands to start.`
    );

    console.log(`\n cd ${projectName} && npm run dev`);
  } catch (error) {
    console.log(error);
  }
}
main();
