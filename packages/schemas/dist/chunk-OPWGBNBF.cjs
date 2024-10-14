"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO5J3LJS3cjs = require('./chunk-O5J3LJS3.cjs');


var _chunkPS5V2F3Ecjs = require('./chunk-PS5V2F3E.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/CitationsGroupUpdateManyArgsSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPS5V2F3Ecjs.CitationsGroupUpdateManyMutationInputSchema, _chunkO5J3LJS3cjs.CitationsGroupUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.CitationsGroupWhereInputSchema.optional()
}).strict();
var CitationsGroupUpdateManyArgsSchema_default = CitationsGroupUpdateManyArgsSchema;




exports.CitationsGroupUpdateManyArgsSchema = CitationsGroupUpdateManyArgsSchema; exports.CitationsGroupUpdateManyArgsSchema_default = CitationsGroupUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-OPWGBNBF.cjs.map