#!/bin/zsh

echo "Writing current package versions to static data"
tsx $ULLD_DEV_ROOT/buildUtils/versioning/writeCurrentPackageVersions.ts
tsx $ULLD_DEV_ROOT/apps/website/src/buildScripts/generateSourceMap.ts
tsx $ULLD_DEV_ROOT/packages/configschema/src/__scripts__/updateShikiThemes.ts
pnpm -C $ULLD_DEV_ROOT/packages/configschema run updateJsonSchemas
pnpm -C $ULLD_DEV_ROOT/packages/configschema run generateDefaultConfig 
pnpm -C $ULLD_DEV_ROOT/packages/configschema run generateSlotMap
tsx $ULLD_DEV_ROOT/apps/website/src/buildScripts/generateComponentMaps.ts

