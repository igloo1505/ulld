#!/bin/zsh

echo "Copying database client for local development"
mkdir -p $ULLD_SANDBOX_ROOT/.prisma/client && cp $ULLD_DEV_ROOT/node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node $ULLD_SANDBOX_ROOT/.prisma/client
