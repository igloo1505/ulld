#! /bin/zsh

tsx --tsconfig $ULLD_DEV_ROOT/apps/website/tsconfig.json $ULLD_DEV_ROOTapps/website/scripts/generateMdxData.ts
echo "Copying files for documentation"
tsx $ULLD_DEV_ROOT/buildUtils/copyTypesForDocumentation.ts
