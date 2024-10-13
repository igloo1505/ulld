"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBVMCAMUcjs = require('./chunk-FBVMCAMU.cjs');


var _chunkIAYK6XLHcjs = require('./chunk-IAYK6XLH.cjs');


var _chunk7C4CPACYcjs = require('./chunk-7C4CPACY.cjs');


var _chunkA2U43OQYcjs = require('./chunk-A2U43OQY.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietaryItemUpsertWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemUpsertWithoutServingInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkIAYK6XLHcjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkFBVMCAMUcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunk7C4CPACYcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkA2U43OQYcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]),
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemUpsertWithoutServingInputSchema_default = DietaryItemUpsertWithoutServingInputSchema;




exports.DietaryItemUpsertWithoutServingInputSchema = DietaryItemUpsertWithoutServingInputSchema; exports.DietaryItemUpsertWithoutServingInputSchema_default = DietaryItemUpsertWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-66FZNRMP.cjs.map