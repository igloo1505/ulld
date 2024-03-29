Removed these from the package.json because we're currently importing directly from src. Add these back in if needed.

```json
"build": "pnpm run build:js && pnpm run build:types",
"build:js": "rollup -c",
"build:types": "tsc -p ./buildTsconfig.json --emitDeclarationOnly --allowSyntheticDefaultImports --outDir dist"
```
