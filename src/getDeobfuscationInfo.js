#! /usr/bin/env node
const { getMethodArray, getModuleEndIndex } = require("./getMethodArray");
const { getVariable } = require("./getVariable");
const { readInputAndReturnOutput } = require("./readInputAndReturnOutput");

// node, file and search then
const [, , search] = process.argv;

const findItems = (source) => {
  const variable = getVariable(source);
  const deobfuscatedItems = getMethodArray(source);

  const foundItems = [];
  for (let index = 0; index < deobfuscatedItems.length; index++) {
    const deobfuscatedItem = deobfuscatedItems[index];

    if (deobfuscatedItem.startsWith(search)) {
      foundItems.push({
        obfuscated: `${variable}[${index}]`,
        deobfuscated: deobfuscatedItem,
      });
    }
  }

  return foundItems;
};

readInputAndReturnOutput(findItems, (foundItems) => {
  console.log("Found items: ", foundItems);
});
