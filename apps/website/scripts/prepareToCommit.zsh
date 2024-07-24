#! /bin/zsh

echo "Gathering tag list"
tsx --tsconfig $ULLD_DEV_ROOT/apps/website/tsconfig.json $ULLD_DEV_ROOT/apps/website/scripts/getTagList.ts
echo "Copying files for documentation"
tsx $ULLD_DEV_ROOT/buildUtils/copyTypesForDocumentation.ts
