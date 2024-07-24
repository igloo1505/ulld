#!/bin/zsh
zsh $ULLD_DEV_ROOT/buildUtils/types/clearGeneratedTypes.zsh
echo "Copying prisma types"
tsx $ULLD_DEV_ROOT/buildUtils/types/copyPrismaTypes.ts
echo "setting monorepo type config scripts"
tsx $ULLD_DEV_ROOT/buildUtils/setMonorepoTypeConfigAndScripts.ts
echo "gathering types"
pnpm turbo --log-order=stream gatherTypes
echo "Creating unified types export"
tsx $ULLD_DEV_ROOT/buildUtils/createTypesUnifiedExport.ts
echo "Copying files for documentation"
tsx $ULLD_DEV_ROOT/buildUtils/copyTypesForDocumentation.ts
