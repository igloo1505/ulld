"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUYL5KMDIcjs = require('./chunk-UYL5KMDI.cjs');


var _chunkNYL4UQD7cjs = require('./chunk-NYL4UQD7.cjs');


var _chunkJKL65NEEcjs = require('./chunk-JKL65NEE.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateManyWithWhereWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUYL5KMDIcjs.DietaryItemScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJKL65NEEcjs.DietaryItemUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNYL4UQD7cjs.DietaryItemUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default = DietaryItemUpdateManyWithWhereWithoutDietInputSchema;




exports.DietaryItemUpdateManyWithWhereWithoutDietInputSchema = DietaryItemUpdateManyWithWhereWithoutDietInputSchema; exports.DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default = DietaryItemUpdateManyWithWhereWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-7ZQYIBUT.cjs.map