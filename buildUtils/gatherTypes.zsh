#!/bin/zsh
zsh $ULLD_DEV_ROOT/buildUtils/clearGeneratedTypes.zsh
tsx $ULLD_DEV_ROOT/buildUtils/setMonorepoTypeConfigAndScripts.ts
pnpm turbo --log-order=stream gatherTypes
tsx $ULLD_DEV_ROOT/buildUtils/createTypesUnifiedExport.ts
