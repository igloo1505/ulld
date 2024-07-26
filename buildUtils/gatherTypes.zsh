#!/bin/zsh

echo "Gathering api types"
tsx $ULLD_DEV_ROOT/buildUtils/types/gather/gatherApiTypes.ts
echo "Writing current package versions to static data"
tsx $ULLD_DEV_ROOT/buildUtils/versioning/writeCurrentPackageVersions.ts
zsh $ULLD_DEV_ROOT/buildUtils/types/clearGeneratedTypes.zsh
echo "Copying prisma types"
tsx $ULLD_DEV_ROOT/buildUtils/types/copyPrismaTypes.ts
echo "setting monorepo type config scripts"
tsx $ULLD_DEV_ROOT/buildUtils/setMonorepoTypeConfigAndScripts.ts
echo "gathering configschema types"
pnpm tsc --project $ULLD_DEV_ROOT/packages/configschema/tsconfigTypes.json --emitDeclarationOnly
echo "Creating unified types export"
tsx $ULLD_DEV_ROOT/buildUtils/createTypesUnifiedExport.ts
echo "Copying files for documentation"
tsx $ULLD_DEV_ROOT/buildUtils/copyTypesForDocumentation.ts
