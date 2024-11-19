#!/bin/zsh

# echo "Setting template string data"
# tsx $ULLD_DEV_ROOT/buildUtils/gatherBuildTemplateStrings.ts
echo "Gathering api types"
tsx $ULLD_DEV_ROOT/buildUtils/types/gather/gatherApiTypes.ts
echo "Writing current package versions to static data"
tsx $ULLD_DEV_ROOT/buildUtils/versioning/writeCurrentPackageVersions.ts
zsh $ULLD_DEV_ROOT/buildUtils/types/clearGeneratedTypes.zsh
echo "Copying prisma types"
tsx $ULLD_DEV_ROOT/buildUtils/types/copyPrismaTypes.ts
# echo "setting monorepo type config scripts"
# tsx $ULLD_DEV_ROOT/buildUtils/setMonorepoTypeConfigAndScripts.ts
# echo "gathering configschema types"
# pnpm tsc --project $ULLD_DEV_ROOT/packages/configschema/tsconfigTypes.json --emitDeclarationOnly
echo "Creating unified types export"
tsx $ULLD_DEV_ROOT/buildUtils/createTypesUnifiedExport.ts 
echo "Copying files for documentation"
tsx $ULLD_DEV_ROOT/buildUtils/copyTypesForDocumentation.ts
# Removed during move to Go as this is now being handled as part of the configschema package build.
# echo "Creating json schemas for various configs"
# tsx $ULLD_DEV_ROOT/packages/configschema/src/__scripts__/generateJsonSchemas.ts
echo "formatting package.json files"
pnpm syncpack format
