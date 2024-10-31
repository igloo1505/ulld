#!/bin/zsh


trash $ULLD_DEV_ROOT/packages/types/src/generated/**
touch $ULLD_DEV_ROOT/packages/types/src/generated/index.ts
mkdir $ULLD_DEV_ROOT/packages/types/src/generated/configschema
touch $ULLD_DEV_ROOT/packages/types/src/generated/configschema/index.ts
echo "export type JUST_TO_AVOID_ERROR = {}" > $ULLD_DEV_ROOT/packages/types/src/generated/index.ts
echo "export type JUST_TO_AVOID_ERROR = {}" > $ULLD_DEV_ROOT/packages/types/src/generated/configschema/index.ts
