"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAGOCUPD2cjs = require('./chunk-AGOCUPD2.cjs');


var _chunkYLRXCI77cjs = require('./chunk-YLRXCI77.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkYLRXCI77cjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkAGOCUPD2cjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema;




exports.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema; exports.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-BKCKOYFZ.cjs.map