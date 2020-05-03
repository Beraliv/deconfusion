#! /usr/bin/env node
const { getMethodArray, getModuleEndIndex } = require("./getMethodArray");
const { getVariable } = require("./getVariable");
const { readInputAndReturnOutput } = require("./readInputAndReturnOutput");

const BY_INDEX = "--by-index";

// node, file and search then
const [, , search, option] = process.argv;

const isByIndex = option === BY_INDEX;

const findItems = (source) => {
  const variable = getVariable(source);
  const deobfuscatedItems = getMethodArray(source);

  if (isByIndex) {
    const index = Number(search);

    return {
      obfuscated: `${variable}[${index}]`,
      deobfuscated: deobfuscatedItems[index],
    };
  }

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
  if (isByIndex) {
    console.log(`Item by index=[${search}]:`, foundItems);
    return;
  }

  console.log("Found items:", foundItems);
});
