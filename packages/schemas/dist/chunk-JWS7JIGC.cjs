"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIXKYKCPcjs = require('./chunk-LIXKYKCP.cjs');

// src/database/outputTypeSchemas/DietCreateManyArgsSchema.ts
var _zod = require('zod');
var DietCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLIXKYKCPcjs.DietCreateManyInputSchema, _chunkLIXKYKCPcjs.DietCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietCreateManyArgsSchema_default = DietCreateManyArgsSchema;




exports.DietCreateManyArgsSchema = DietCreateManyArgsSchema; exports.DietCreateManyArgsSchema_default = DietCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-JWS7JIGC.cjs.map