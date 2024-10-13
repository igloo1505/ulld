"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIM74CSYDcjs = require('./chunk-IM74CSYD.cjs');


var _chunkKAJUJ36Ecjs = require('./chunk-KAJUJ36E.cjs');


var _chunkVQGEMZLScjs = require('./chunk-VQGEMZLS.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkIM74CSYDcjs.RelatedValuesScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVQGEMZLScjs.RelatedValuesUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKAJUJ36Ecjs.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;




exports.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema; exports.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-6MMZFFYK.cjs.map