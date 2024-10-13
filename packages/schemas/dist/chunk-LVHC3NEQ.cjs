"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYM4L6F3Lcjs = require('./chunk-YM4L6F3L.cjs');


var _chunkS62NAQDTcjs = require('./chunk-S62NAQDT.cjs');


var _chunk3XJOBNGHcjs = require('./chunk-3XJOBNGH.cjs');


var _chunkW3NJ27POcjs = require('./chunk-W3NJ27PO.cjs');


var _chunkA3TBPTJVcjs = require('./chunk-A3TBPTJV.cjs');


var _chunkMRFO257Qcjs = require('./chunk-MRFO257Q.cjs');


var _chunkAZQRO5Q3cjs = require('./chunk-AZQRO5Q3.cjs');


var _chunkOXMVN5ZWcjs = require('./chunk-OXMVN5ZW.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithoutDietNestedInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyWithoutDietNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkMRFO257Qcjs.TimePeriodCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkMRFO257Qcjs.TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkYM4L6F3Lcjs.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkYM4L6F3Lcjs.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkA3TBPTJVcjs.TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkS62NAQDTcjs.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkS62NAQDTcjs.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk3XJOBNGHcjs.TimePeriodUpdateManyWithWhereWithoutDietInputSchema), _zod.z.lazy(() => _chunk3XJOBNGHcjs.TimePeriodUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkW3NJ27POcjs.TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => _chunkW3NJ27POcjs.TimePeriodScalarWhereInputSchema).array()]).optional()
}).strict();
var TimePeriodUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUpdateManyWithoutDietNestedInputSchema;




exports.TimePeriodUpdateManyWithoutDietNestedInputSchema = TimePeriodUpdateManyWithoutDietNestedInputSchema; exports.TimePeriodUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUpdateManyWithoutDietNestedInputSchema_default;
//# sourceMappingURL=chunk-LVHC3NEQ.cjs.map