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
  { obfuscated: '_x8302[1312]', deobfuscated: 'entries' },
  { obfuscated: '_x8302[1489]', deobfuscated: 'entitlementToken' },
  { obfuscated: '_x8302[1491]', deobfuscated: 'entitlement_id' }
]
```
