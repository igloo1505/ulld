"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQZDTTRCcjs = require('./chunk-LQZDTTRC.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateManyArgsSchema.ts
var _zod = require('zod');
var CitationsGroupCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLQZDTTRCcjs.CitationsGroupCreateManyInputSchema, _chunkLQZDTTRCcjs.CitationsGroupCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var CitationsGroupCreateManyArgsSchema_default = CitationsGroupCreateManyArgsSchema;




exports.CitationsGroupCreateManyArgsSchema = CitationsGroupCreateManyArgsSchema; exports.CitationsGroupCreateManyArgsSchema_default = CitationsGroupCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-F4MJIM6G.cjs.map