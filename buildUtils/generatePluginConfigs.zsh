#!/bin/zsh

cd $ULLD_DEV_ROOT
tsx $ULLD_DEV_ROOT/buildUtils/setPluginBuildScripts.ts
pnpm turbo generatePluginConfig
