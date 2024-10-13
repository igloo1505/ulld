"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDBOMRJJCcjs = require('./chunk-DBOMRJJC.cjs');


var _chunk5UWDBB3Acjs = require('./chunk-5UWDBB3A.cjs');


var _chunkR6KSQQWNcjs = require('./chunk-R6KSQQWN.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDBOMRJJCcjs.HealthReportScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkR6KSQQWNcjs.HealthReportUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5UWDBB3Acjs.HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema;




exports.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema; exports.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-OUOLYUSK.cjs.map