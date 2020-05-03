#! /usr/bin/env node
const concat = require("concat-stream");
const fs = require("fs");
const { getMethodArray, getModuleEndIndex } = require("./getMethodArray");
const { getVariable } = require("./getVariable");

const { stdin: input, stdout: output } = process;

const prettifySource = (source) => {
  const variable = getVariable(source);
  const array = getMethodArray(source);

  const FILE_START_CHUNK = `(function (${variable}) {`;

  const rightBeforeArrayChunkIndex = source.indexOf(FILE_START_CHUNK);
  const startModule = rightBeforeArrayChunkIndex + FILE_START_CHUNK.length;
  const endModule = getModuleEndIndex(source);

  const module = source.slice(startModule, endModule);

  let deobfuscatedModule = module;
  for (let i = 0; i < array.length; i++) {
    deobfuscatedModule = deobfuscatedModule.replace(
      new RegExp(`${variable}\\[${i}\\]`, "g"),
      array[i]
    );
  }

  return deobfuscatedModule;
};

input.pipe(
  concat({ encoding: "string" }, (source) => {
    output.write(prettifySource(source));
  })
);
