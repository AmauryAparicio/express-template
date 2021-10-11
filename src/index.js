"use strict";

import { join } from "path";
import { editPackageJson, installNodeModules } from "./util";
import { createProject, createDirectoryContents } from "./create";
import { success } from "log-symbols";

export default async input => {
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
