#! /usr/bin/env node
const concat = require("concat-stream");
const fs = require("fs");
const { readInputAndReturnOutput } = require("./readInputAndReturnOutput");

const { stdin: input, stdout: output } = process;

const readInputAndWriteToOutput = (getOutputSource) => {
  readInputAndReturnOutput(getOutputSource, (outputSource) => {
    output.write(outputSource);
  });
};

module.exports = {
  readInputAndWriteToOutput,
};
