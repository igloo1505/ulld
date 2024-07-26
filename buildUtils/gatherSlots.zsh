#!/bin/zsh

echo "Writing current package versions to static data"
tsx $ULLD_DEV_ROOT/buildUtils/versioning/writeCurrentPackageVersions.ts
tsx $ULLD_DEV_ROOT/packages/configschema/src/__scripts__/generateSlotMap.ts
tsx $ULLD_DEV_ROOT/buildUtils/generateRequiredEmeddableSlots.ts
tsx $ULLD_DEV_ROOT/buildUtils/__temp__/temporaryRequiredSlotsConfig.ts
trash $ULLD_DEV_ROOT/buildUtils/__temp__/temporaryRequiredSlotsConfig.ts
tsx $ULLD_DEV_ROOT/buildUtils/checkDefaultUrlTargets.ts
