#! /usr/bin/env node
const { getMethodArray, getModuleEndIndex } = require("./getMethodArray");
const { getVariable } = require("./getVariable");
const { readInputAndReturnOutput } = require("./readInputAndReturnOutput");

// node, file and search then
const [, , search] = process.argv;

const findItems = (source) => {
  const variable = getVariable(source);
  const items = getMethodArray(source);

  const foundItems = [];
  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    if (item.startsWith(search)) {
      foundItems.push({
        obfuscatedValue: `${variable}[${index}]`,
        index,
        item,
      });
    }
  }

  return foundItems;
};

readInputAndReturnOutput(findItems, (foundItems) => {
  console.log("Found items: ", foundItems);
});
