'use strict';

var zod = require('zod');
require('glob-to-regexp');
require('@ulld/utilities/utils/fsUtils');

// src/zod/terminalConfig.ts
var logLevelSchema = zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);

// src/zod/terminalConfig.ts
var terminalConfigSchema = zod.z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

exports.terminalConfigSchema = terminalConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=terminalConfig.cjs.map