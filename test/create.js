"use strict";

const { createProject, createDirectoryContents } = require("../src/create");
const test = require("ava");
const { rmdirSync } = require("fs");

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

test.after(() => {
  rmdirSync("testDir1");
  rmdirSync("testDir2");
});
