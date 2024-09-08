'use strict';

var zod = require('zod');

// src/zod/credentials/main.ts
var credentialsConfigSchema = zod.z.object({
  googleServiceAccountJsonPath: zod.z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});

exports.credentialsConfigSchema = credentialsConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map