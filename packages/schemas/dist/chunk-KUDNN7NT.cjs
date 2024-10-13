"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSHACSG3Vcjs = require('./chunk-SHACSG3V.cjs');

// src/database/outputTypeSchemas/DJTCreateManyArgsSchema.ts
var _zod = require('zod');
var DJTCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSHACSG3Vcjs.DJTCreateManyInputSchema, _chunkSHACSG3Vcjs.DJTCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DJTCreateManyArgsSchema_default = DJTCreateManyArgsSchema;




exports.DJTCreateManyArgsSchema = DJTCreateManyArgsSchema; exports.DJTCreateManyArgsSchema_default = DJTCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-KUDNN7NT.cjs.map