"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA3TBPTJVcjs = require('./chunk-A3TBPTJV.cjs');


var _chunkMRFO257Qcjs = require('./chunk-MRFO257Q.cjs');


var _chunkAZQRO5Q3cjs = require('./chunk-AZQRO5Q3.cjs');


var _chunkOXMVN5ZWcjs = require('./chunk-OXMVN5ZW.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/inputTypeSchemas/TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkMRFO257Qcjs.TimePeriodCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkMRFO257Qcjs.TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkA3TBPTJVcjs.TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema).array()]).optional()
}).strict();
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema;




exports.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema; exports.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-TWH3NLAB.cjs.map