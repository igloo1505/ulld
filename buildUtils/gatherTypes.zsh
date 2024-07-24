#!/bin/zsh
zsh $ULLD_DEV_ROOT/buildUtils/clearGeneratedTypes.zsh
echo "setting monorepo type config scripts"
tsx $ULLD_DEV_ROOT/buildUtils/setMonorepoTypeConfigAndScripts.ts
echo "gathering types"
pnpm turbo --log-order=stream gatherTypes
echo "Creating unified types export"
tsx $ULLD_DEV_ROOT/buildUtils/createTypesUnifiedExport.ts
