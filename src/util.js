"use strict";

import { templateMapping as templates } from "./templateMapping";
import editJsonFile from "edit-json-file";
import exec from "execa";

export function isValidTemplate(template, choices) {
  if (choices.includes(template)) {
    return template;
  } else {
    if (templates[template]) {
      return templates[template];
    } else {
      throw new Error(
        `Template ${template} does not exist. Please input a valid template or select from list`
      );
    }
  }
}

export function editPackageJson(path, projectName) {
  let file = editJsonFile(path, { autosave: true });
  file.set("name", projectName);
  return;
}

export async function installNodeModules(pkgManager, path) {
  const result = await exec(pkgManager, ["install"], {
    cwd: path,
    stdio: "inherit",
  });
  return result;
}
