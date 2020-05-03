#! /usr/bin/env node
const concat = require("concat-stream");
const fs = require("fs");

const { stdin: input } = process;

const readInputAndReturnOutput = (getOutputSource, callback) => {
  input.pipe(
    concat({ encoding: "string" }, (source) => {
      const outputSource = getOutputSource(source);

      callback(outputSource);
    })
  );
};

module.exports = {
  readInputAndReturnOutput,
};
