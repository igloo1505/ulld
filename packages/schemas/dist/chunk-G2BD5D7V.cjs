"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRQUJOAWWcjs = require('./chunk-RQUJOAWW.cjs');


var _chunkGHFCOP5Kcjs = require('./chunk-GHFCOP5K.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietUpdateManyArgsSchema.ts
var _zod = require('zod');
var DietUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGHFCOP5Kcjs.DietUpdateManyMutationInputSchema, _chunkRQUJOAWWcjs.DietUncheckedUpdateManyInputSchema]),
  where: _chunkZGGHUMG7cjs.DietWhereInputSchema.optional()
}).strict();
var DietUpdateManyArgsSchema_default = DietUpdateManyArgsSchema;




exports.DietUpdateManyArgsSchema = DietUpdateManyArgsSchema; exports.DietUpdateManyArgsSchema_default = DietUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-G2BD5D7V.cjs.map