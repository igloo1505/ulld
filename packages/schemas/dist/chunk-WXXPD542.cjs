"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGDYLKIBBcjs = require('./chunk-GDYLKIBB.cjs');


var _chunk3XK7CBUVcjs = require('./chunk-3XK7CBUV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietaryItemUpdateManyArgsSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk3XK7CBUVcjs.DietaryItemUpdateManyMutationInputSchema, _chunkGDYLKIBBcjs.DietaryItemUncheckedUpdateManyInputSchema]),
  where: _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema.optional()
}).strict();
var DietaryItemUpdateManyArgsSchema_default = DietaryItemUpdateManyArgsSchema;




exports.DietaryItemUpdateManyArgsSchema = DietaryItemUpdateManyArgsSchema; exports.DietaryItemUpdateManyArgsSchema_default = DietaryItemUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-WXXPD542.cjs.map