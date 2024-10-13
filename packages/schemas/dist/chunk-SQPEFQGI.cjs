"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBVMCAMUcjs = require('./chunk-FBVMCAMU.cjs');


var _chunkIAYK6XLHcjs = require('./chunk-IAYK6XLH.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateToOneWithWhereWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkIAYK6XLHcjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkFBVMCAMUcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)])
}).strict();
var DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema;




exports.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema; exports.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default = DietaryItemUpdateToOneWithWhereWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-SQPEFQGI.cjs.map