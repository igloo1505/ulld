#!/bin/zsh

cd $ULLD_DEV_ROOT/apps/template
tsx ./__scripts__/development/setInternalVersions.ts workspace
pnpm install --filter=@ulld/template --lockfile-only --offline
