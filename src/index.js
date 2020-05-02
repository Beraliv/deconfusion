#! /usr/bin/env node
const fs = require("fs");
const concat = require("concat-stream");

const { stdin: input, stdout: output } = process;

const getVariable = (file) => {
  const [, variable] = file.match(/(_x\d*)/);
  return variable;
};

const RIGHT_BEFORE_ARRAY_CHUNK = "}.call(this, [";

const getModuleEndIndex = (source) => {
  const rightBeforeArrayChunkIndex = source.lastIndexOf(RIGHT_BEFORE_ARRAY_CHUNK);

  return rightBeforeArrayChunkIndex;
}

const getArrayStartIndex = (source) => {
  const rightBeforeArrayChunkIndex = getModuleEndIndex(source);

  const arrayStartIndex =
    rightBeforeArrayChunkIndex + RIGHT_BEFORE_ARRAY_CHUNK.length - 1;

  return arrayStartIndex;
}

const getArray = (source) => {
  const arrayStartIndex = getArrayStartIndex(source);
  const arrayEndIndex = source.lastIndexOf("]");

  const arrayString = source.slice(arrayStartIndex, arrayEndIndex + 1);

  const array = arrayString.split('\n').map(line => {
    let end = line.length - 1;

    if (line[end] === ',') {
      end--;
    }

    const quote = line[end];
    const start = line.indexOf(quote);

    return line.slice(start, end + 1);
  }).slice(1, -1);

  return array;
};

const prettifySource = (source) => {
  const variable = getVariable(source);
  const array = getArray(source);

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
}

input.pipe(
  concat({ encoding: "string" }, (source) => {
    output.write(prettifySource(source));
  })
);
