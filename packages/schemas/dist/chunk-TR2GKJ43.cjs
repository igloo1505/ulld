"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBPCPA2V4cjs = require('./chunk-BPCPA2V4.cjs');


var _chunkD33NQUAGcjs = require('./chunk-D33NQUAG.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietUpdateWithWhereUniqueWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpdateWithWhereUniqueWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkD33NQUAGcjs.DietUpdateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkBPCPA2V4cjs.DietUncheckedUpdateWithoutItemsInputSchema)])
}).strict();
var DietUpdateWithWhereUniqueWithoutItemsInputSchema_default = DietUpdateWithWhereUniqueWithoutItemsInputSchema;




exports.DietUpdateWithWhereUniqueWithoutItemsInputSchema = DietUpdateWithWhereUniqueWithoutItemsInputSchema; exports.DietUpdateWithWhereUniqueWithoutItemsInputSchema_default = DietUpdateWithWhereUniqueWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-TR2GKJ43.cjs.map