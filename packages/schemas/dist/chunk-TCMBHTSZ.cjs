"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRDW27HGKcjs = require('./chunk-RDW27HGK.cjs');


var _chunkJMCAELG2cjs = require('./chunk-JMCAELG2.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateToOneWithWhereWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJMCAELG2cjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkRDW27HGKcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)])
}).strict();
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema;




exports.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema; exports.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-TCMBHTSZ.cjs.map