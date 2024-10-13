"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMGJZRZ6Qcjs = require('./chunk-MGJZRZ6Q.cjs');


var _chunk6MMZFFYKcjs = require('./chunk-6MMZFFYK.cjs');


var _chunkIM74CSYDcjs = require('./chunk-IM74CSYD.cjs');


var _chunkDJLFEMG3cjs = require('./chunk-DJLFEMG3.cjs');


var _chunkE3LSL5NXcjs = require('./chunk-E3LSL5NX.cjs');


var _chunkDIU4CJCAcjs = require('./chunk-DIU4CJCA.cjs');


var _chunkKEV5POACcjs = require('./chunk-KEV5POAC.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyWithoutEquationsNestedInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyWithoutEquationsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema).array(), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkE3LSL5NXcjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkE3LSL5NXcjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkDJLFEMG3cjs.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkDJLFEMG3cjs.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkMGJZRZ6Qcjs.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkMGJZRZ6Qcjs.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk6MMZFFYKcjs.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema), _zod.z.lazy(() => _chunk6MMZFFYKcjs.RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkIM74CSYDcjs.RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => _chunkIM74CSYDcjs.RelatedValuesScalarWhereInputSchema).array()]).optional()
}).strict();
var RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema;




exports.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema; exports.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default = RelatedValuesUpdateManyWithoutEquationsNestedInputSchema_default;
//# sourceMappingURL=chunk-EA3YFH2V.cjs.map