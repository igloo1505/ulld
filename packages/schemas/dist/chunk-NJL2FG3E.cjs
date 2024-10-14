"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRX6X4NUTcjs = require('./chunk-RX6X4NUT.cjs');


var _chunkKFTS3A65cjs = require('./chunk-KFTS3A65.cjs');


var _chunk5FRKEV65cjs = require('./chunk-5FRKEV65.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkRX6X4NUTcjs.HealthReportScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk5FRKEV65cjs.HealthReportUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKFTS3A65cjs.HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema;




exports.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema; exports.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default = HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-NJL2FG3E.cjs.map