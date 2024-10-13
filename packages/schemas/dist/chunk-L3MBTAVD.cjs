"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQZDTTRCcjs = require('./chunk-LQZDTTRC.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var CitationsGroupCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLQZDTTRCcjs.CitationsGroupCreateManyInputSchema, _chunkLQZDTTRCcjs.CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var CitationsGroupCreateManyAndReturnArgsSchema_default = CitationsGroupCreateManyAndReturnArgsSchema;




exports.CitationsGroupCreateManyAndReturnArgsSchema = CitationsGroupCreateManyAndReturnArgsSchema; exports.CitationsGroupCreateManyAndReturnArgsSchema_default = CitationsGroupCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-L3MBTAVD.cjs.map