"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAGOCUPD2cjs = require('./chunk-AGOCUPD2.cjs');


var _chunkYLRXCI77cjs = require('./chunk-YLRXCI77.cjs');


var _chunkF625UO5Pcjs = require('./chunk-F625UO5P.cjs');


var _chunkGDR5BR6Ccjs = require('./chunk-GDR5BR6C.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpsertWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUpsertWithoutPeriodsFollowedInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkYLRXCI77cjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkAGOCUPD2cjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkF625UO5Pcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkGDR5BR6Ccjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]),
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutPeriodsFollowedInputSchema_default = DietUpsertWithoutPeriodsFollowedInputSchema;




exports.DietUpsertWithoutPeriodsFollowedInputSchema = DietUpsertWithoutPeriodsFollowedInputSchema; exports.DietUpsertWithoutPeriodsFollowedInputSchema_default = DietUpsertWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-T4NSS2GG.cjs.map