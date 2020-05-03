# deconfusion

Simple deobfuscator for JavaScript source code (opposite effect of obfuscator)

## Deobfuscate

Read the input file and write the result to the output file

```bash
node src/deobfuscate.js < examples/joyn/player-toolkit-template/input.js > examples/joyn/player-toolkit-template/output.js
```

## Deobfuscation info

Read the input file and show the info about the method

```bash
node src/getDeobfuscationInfo.js < examples/joyn/player-toolkit-template/input.js ent

# output below
Found items:  [
  { obfuscatedValue: '_x8302[1312]', index: 1312, item: 'entries' },
  {
    obfuscatedValue: '_x8302[1489]',
    index: 1489,
    item: 'entitlementToken'
  },
  {
    obfuscatedValue: '_x8302[1491]',
    index: 1491,
    item: 'entitlement_id'
  }
]
```
