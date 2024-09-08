"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/credentials/main.ts
var _zod = require('zod');
var credentialsConfigSchema = _zod.z.object({
  googleServiceAccountJsonPath: _zod.z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});



exports.credentialsConfigSchema = credentialsConfigSchema;
//# sourceMappingURL=chunk-46A3VLRE.cjs.map