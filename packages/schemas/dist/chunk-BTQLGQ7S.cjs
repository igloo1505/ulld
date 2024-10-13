"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSHACSG3Vcjs = require('./chunk-SHACSG3V.cjs');

// src/database/outputTypeSchemas/DJTCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DJTCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSHACSG3Vcjs.DJTCreateManyInputSchema, _chunkSHACSG3Vcjs.DJTCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DJTCreateManyAndReturnArgsSchema_default = DJTCreateManyAndReturnArgsSchema;




exports.DJTCreateManyAndReturnArgsSchema = DJTCreateManyAndReturnArgsSchema; exports.DJTCreateManyAndReturnArgsSchema_default = DJTCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-BTQLGQ7S.cjs.map