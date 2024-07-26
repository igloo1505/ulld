#!/bin/zsh

cd $ULLD_DEV_ROOT
git add .
git commit -m "Pre patch bump commit"
pnpm changeset
pnpm changeset version
git add .
git commit
git push
tsx $ULLD_DEV_ROOT/buildUtils/updateBasePackageVersions.ts
git -C $ULLD_TEST_ROOT add .
git -C $ULLD_TEST_ROOT commit -m "Change versions to match patch bump"
git -C $ULLD_TEST_ROOT push
pnpm changeset publish
