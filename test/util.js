"use strict";

import {
  isValidTemplate,
  editPackageJson,
  installNodeModules,
} from "../src/util";
import test from "ava";

test("Check if valid template is returned if available in choices", t => {
  let template = isValidTemplate("test1", ["test1", "test2"]);
  t.is(template, "test1");
});

test("Check if error is thrown if not initials and not available in choices", t => {
  t.throws(() => {
    isValidTemplate("test3", ["test1", "test2"]);
  });
});

test("Check if valid template is returned if initials given", t => {
  let template = isValidTemplate("ts", ["test1", "test2"]);
  t.is(template, "TypeScript");
});

test("Check if error is thrown if not valid initials", t => {
  t.throws(() => {
    isValidTemplate("tss", ["test1", "test2"]);
  });
});

test("checks if package can be modified", t => {
  t.notThrows(() => {
    editPackageJson("../package.json", "create-express-app");
  });
});

test("checks if command is executing", t => {
  t.notThrows(() => {
    installNodeModules("npm", "");
  });
});
