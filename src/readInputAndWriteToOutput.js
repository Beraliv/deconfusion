#! /usr/bin/env node
const concat = require("concat-stream");
const fs = require("fs");

const { stdin: input, stdout: output } = process;

const readInputAndWriteToOutput = (getOutputSource) => {
  input.pipe(
    concat({ encoding: "string" }, (source) => {
      const outputSource = getOutputSource(source);

      output.write(outputSource);
    })
  );
};

module.exports = {
  readInputAndWriteToOutput,
};
