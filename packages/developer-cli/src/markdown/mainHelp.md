_Use_ `--help` _flag to show traditional help._

# Commands

## packageJsonExports

Convert all package.json exports to the esm/cjs interchangable format:

```json
"./someExport": {
    "types": "./somePath.d.ts",
    "import": "./somePath.mjs",
    "require": "./somePath.cjs",
}
```

## generateTunnel

Generate a tunnel file in the provided directory. Accepts 0 or more `--exclude` arguments, a glob argument that defaults to `**/*.{ts,tsx}`, and an optional `--asType` argument that will export everything using the `export type * from "..."` syntax.
