#!/bin/zsh

cd $ULLD_DEV_ROOT
pnpm syncpack format
git add ./package.json
echo "Formatted package.json successfully"
