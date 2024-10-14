"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRDW27HGKcjs = require('./chunk-RDW27HGK.cjs');


var _chunkJMCAELG2cjs = require('./chunk-JMCAELG2.cjs');


var _chunkARCMLFBUcjs = require('./chunk-ARCMLFBU.cjs');


var _chunkVF4KROUCcjs = require('./chunk-VF4KROUC.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietaryItemUpsertWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemUpsertWithoutServingInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkJMCAELG2cjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkRDW27HGKcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkARCMLFBUcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkVF4KROUCcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]),
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemUpsertWithoutServingInputSchema_default = DietaryItemUpsertWithoutServingInputSchema;




exports.DietaryItemUpsertWithoutServingInputSchema = DietaryItemUpsertWithoutServingInputSchema; exports.DietaryItemUpsertWithoutServingInputSchema_default = DietaryItemUpsertWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-EL3QVAAA.cjs.map