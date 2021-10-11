"use strict";

import ui from "../src/ui";
import test from "ava";

test("Check if options are returned correctly", async t => {
  const options = {
    yarn: false,
    default: true,
  };
  const expectedResult = {
    yarn: false,
    default: true,
    destinationFolder: "Test1",
    pkgManager: "npm",
    template: "TypeScript",
  };
  let result = await ui(options, "Test1");
  t.deepEqual(result, expectedResult);
});

test("Check if options with template are returned correctly", async t => {
  const options = {
    yarn: true,
    default: false,
    template: "TypeScript",
  };
  const expectedResult = {
    yarn: true,
    default: false,
    destinationFolder: "Test1",
    pkgManager: "yarn",
    template: "TypeScript",
  };
  let result = await ui(options, "Test1");
  t.deepEqual(result, expectedResult);
});
