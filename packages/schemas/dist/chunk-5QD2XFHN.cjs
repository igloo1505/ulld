"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXFKPUF3Ucjs = require('./chunk-XFKPUF3U.cjs');


var _chunkTMKH7U2Mcjs = require('./chunk-TMKH7U2M.cjs');


var _chunkSJMQ3AERcjs = require('./chunk-SJMQ3AER.cjs');


var _chunkBII6UEHZcjs = require('./chunk-BII6UEHZ.cjs');


var _chunkXG4JZKGDcjs = require('./chunk-XG4JZKGD.cjs');


var _chunkPF6MTGUHcjs = require('./chunk-PF6MTGUH.cjs');


var _chunkKDIXAJ23cjs = require('./chunk-KDIXAJ23.cjs');


var _chunkXLAXCJDHcjs = require('./chunk-XLAXCJDH.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithoutDietNestedInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyWithoutDietNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkPF6MTGUHcjs.TimePeriodCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkPF6MTGUHcjs.TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkXFKPUF3Ucjs.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkXFKPUF3Ucjs.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkXG4JZKGDcjs.TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkTMKH7U2Mcjs.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkTMKH7U2Mcjs.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkSJMQ3AERcjs.TimePeriodUpdateManyWithWhereWithoutDietInputSchema), _zod.z.lazy(() => _chunkSJMQ3AERcjs.TimePeriodUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkBII6UEHZcjs.TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => _chunkBII6UEHZcjs.TimePeriodScalarWhereInputSchema).array()]).optional()
}).strict();
var TimePeriodUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUpdateManyWithoutDietNestedInputSchema;




exports.TimePeriodUpdateManyWithoutDietNestedInputSchema = TimePeriodUpdateManyWithoutDietNestedInputSchema; exports.TimePeriodUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUpdateManyWithoutDietNestedInputSchema_default;
//# sourceMappingURL=chunk-5QD2XFHN.cjs.map