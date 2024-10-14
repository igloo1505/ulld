"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3XQZ5NDKcjs = require('./chunk-3XQZ5NDK.cjs');


var _chunkATQRC6UHcjs = require('./chunk-ATQRC6UH.cjs');


var _chunk3XK7CBUVcjs = require('./chunk-3XK7CBUV.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateManyWithWhereWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3XQZ5NDKcjs.DietaryItemScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk3XK7CBUVcjs.DietaryItemUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkATQRC6UHcjs.DietaryItemUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default = DietaryItemUpdateManyWithWhereWithoutDietInputSchema;




exports.DietaryItemUpdateManyWithWhereWithoutDietInputSchema = DietaryItemUpdateManyWithWhereWithoutDietInputSchema; exports.DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default = DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-RGAC6GYH.cjs.map