"use strict";

const {
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
} = require("fs");
const { join } = require("path");

exports.createProject = projectPath => {
  if (existsSync(projectPath)) {
    throw new Error(`Folder ${projectPath} exists. Delete or use another name`);
  }
  mkdirSync(projectPath);
  return true;
};

exports.createDirectoryContents = (templatePath, projectName) => {
  // list of file/folder that should not be copied
  const SKIP_FILES = ["node_modules", "dist"];
  // read all files/folders (1 level) from template folder
  const filesToCreate = readdirSync(templatePath);
  // loop each file/folder
  filesToCreate.forEach(file => {
    const origFilePath = join(templatePath, file);
    // get stats about the current file
    const stats = statSync(origFilePath);
    // skip files that should not be copied
    if (SKIP_FILES.indexOf(file) > -1) return;
    const CURR_DIR = process.cwd();
    if (stats.isFile()) {
      // read file content and transform it using template engine
      let contents = readFileSync(origFilePath, "utf8");
      // write file to destination folder
      const writePath = join(CURR_DIR, projectName, file);
      writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      // create folder in destination folder
      mkdirSync(join(CURR_DIR, projectName, file));
      // copy files/folder inside current folder recursively
      this.createDirectoryContents(
        join(templatePath, file),
        join(projectName, file)
      );
    }
  });
};
