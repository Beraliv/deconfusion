# deconfusion

Simple deobfuscator for JavaScript source code (opposite effect of obfuscator)

## Obfuscation

The library is based on the source code of [confusion](https://github.com/uxebu/confusion), it tries to revert an effect of it.

So it really helps for:

1. **Code readability** (better understanding)
2. **Easy debugging** (you can use Charles, replace scripts and get better stack trace of loading and errors)

## Deobfuscate

Read the input file and write the result to the output file

```bash
node src/deobfuscate.js < examples/joyn/player-toolkit-template/input.js > examples/joyn/player-toolkit-template/output.js
```

## Deobfuscation info

Read the input file and show the info about the method

```bash
node src/getDeobfuscationInfo.js < examples/joyn/player-toolkit-template/input.js ent

# output
Found items:  [
  { obfuscated: '_x8302[1312]', deobfuscated: 'entries' },
  { obfuscated: '_x8302[1489]', deobfuscated: 'entitlementToken' },
  { obfuscated: '_x8302[1491]', deobfuscated: 'entitlement_id' }
]
```

Also there is a search by index

```bash
node src/getDeobfuscationInfo.js < examples/joyn/player-toolkit-template/input.js 46 --by-index

# output
Item by index=[46]: { obfuscated: '_x8302[46]', deobfuscated: 'logging' }
```
