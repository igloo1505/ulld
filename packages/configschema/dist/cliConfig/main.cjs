"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/cliConfig/main.ts
var _zod = require('zod');
var buildConfigSchema = _zod.z.object({
  buildDir: _zod.z.string().optional().describe(
    "Absolute path to the directory where the ULLD app should be generated."
  )
});
var ulldCliConfigSchema = _zod.z.object({
  build: buildConfigSchema.default({}),
  logLevel: _zod.z.union([
    _zod.z.literal("info"),
    _zod.z.literal("warn"),
    _zod.z.literal("error"),
    _zod.z.literal("debug")
  ]).optional(),
  logFile: _zod.z.string().optional().describe("Absolute path to a log file used during the build process.")
});


exports.ulldCliConfigSchema = ulldCliConfigSchema;
//# sourceMappingURL=main.cjs.map