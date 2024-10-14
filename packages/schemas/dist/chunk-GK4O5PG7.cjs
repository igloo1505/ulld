"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVI3ITOUAcjs = require('./chunk-VI3ITOUA.cjs');

// src/database/outputTypeSchemas/DJTCreateManyArgsSchema.ts
var _zod = require('zod');
var DJTCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVI3ITOUAcjs.DJTCreateManyInputSchema, _chunkVI3ITOUAcjs.DJTCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DJTCreateManyArgsSchema_default = DJTCreateManyArgsSchema;




exports.DJTCreateManyArgsSchema = DJTCreateManyArgsSchema; exports.DJTCreateManyArgsSchema_default = DJTCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-GK4O5PG7.cjs.map