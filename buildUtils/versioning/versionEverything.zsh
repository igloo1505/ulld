#!/bin/zsh

cd $ULLD_DEV_ROOT
pnpm turbo --log-order=stream generateTargetDatabase
zsh $ULLD_DEV_ROOT/buildUtils/gatherTypes.zsh
git add .
git commit -m "Pre patch bump commit"
pnpm changeset
pnpm changeset version
tsx $ULLD_DEV_ROOT/buildUtils/versioning/writeCurrentPackageVersions.ts
echo "Recreating default configs"
tsx $ULLD_DEV_ROOT/packages/configschema/src/__scripts__/generateDefaultConfig.ts
git add .
git commit
git push
tsx $ULLD_DEV_ROOT/buildUtils/updateBasePackageVersions.ts
git -C $ULLD_TEST_ROOT add .
git -C $ULLD_TEST_ROOT commit -m "Automatically changed versions to match patch bump"
git -C $ULLD_TEST_ROOT push
pnpm changeset publish
