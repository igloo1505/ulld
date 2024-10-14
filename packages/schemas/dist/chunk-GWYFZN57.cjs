"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZVAKOGAcjs = require('./chunk-UZVAKOGA.cjs');


var _chunk64OL6FIMcjs = require('./chunk-64OL6FIM.cjs');


var _chunkFPOEIB3Lcjs = require('./chunk-FPOEIB3L.cjs');


var _chunkPSUIPIHOcjs = require('./chunk-PSUIPIHO.cjs');


var _chunkLN23EB36cjs = require('./chunk-LN23EB36.cjs');


var _chunk75QHS3DWcjs = require('./chunk-75QHS3DW.cjs');


var _chunkZ5QFVX25cjs = require('./chunk-Z5QFVX25.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyWithoutEquationsNestedInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyWithoutEquationsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema).array(), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkLN23EB36cjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkLN23EB36cjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkPSUIPIHOcjs.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkPSUIPIHOcjs.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkUZVAKOGAcjs.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkUZVAKOGAcjs.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk64OL6FIMcjs.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema), _zod.z.lazy(() => _chunk64OL6FIMcjs.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkFPOEIB3Lcjs.RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => _chunkFPOEIB3Lcjs.RelatedValuesScalarWhereInputSchema).array()]).optional()
}).strict();
var RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema;




exports.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema; exports.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default;
//# sourceMappingURL=chunk-GWYFZN57.cjs.map