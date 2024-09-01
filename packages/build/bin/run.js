#!/usr/bin/env node --loader ts-node/esm

import { execute } from "@oclif/core";

await execute({ dir: import.meta.url });
