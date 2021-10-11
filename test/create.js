"use strict";

import { createProject, createDirectoryContents } from "../src/create";
import test, { after } from "ava";
import { rmdirSync } from "fs";

test("Check if folder is created", t => {
  createProject("testDir1");
  t.throws(() => {
    createProject("testDir1");
  });
});

test("Check if copying works", t => {
  createProject("testDir2");
  t.notThrows(() => {
    createDirectoryContents("testDir1", "testDir2");
  });
});

after(() => {
  rmdirSync("testDir1");
  rmdirSync("testDir2");
});
