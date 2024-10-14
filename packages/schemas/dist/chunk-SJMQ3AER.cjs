"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBII6UEHZcjs = require('./chunk-BII6UEHZ.cjs');


var _chunk46C6GPUAcjs = require('./chunk-46C6GPUA.cjs');


var _chunkPW2FNJDBcjs = require('./chunk-PW2FNJDB.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithWhereWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkBII6UEHZcjs.TimePeriodScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPW2FNJDBcjs.TimePeriodUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk46C6GPUAcjs.TimePeriodUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default = TimePeriodUpdateManyWithWhereWithoutDietInputSchema;




exports.TimePeriodUpdateManyWithWhereWithoutDietInputSchema = TimePeriodUpdateManyWithWhereWithoutDietInputSchema; exports.TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default = TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-SJMQ3AER.cjs.map