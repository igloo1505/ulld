"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFPOEIB3Lcjs = require('./chunk-FPOEIB3L.cjs');


var _chunkRPQDVTGNcjs = require('./chunk-RPQDVTGN.cjs');


var _chunk3D7SM4DLcjs = require('./chunk-3D7SM4DL.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkFPOEIB3Lcjs.RelatedValuesScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk3D7SM4DLcjs.RelatedValuesUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkRPQDVTGNcjs.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;




exports.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema; exports.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default = RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-64OL6FIM.cjs.map