"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBKCKOYFZcjs = require('./chunk-BKCKOYFZ.cjs');


var _chunkT4NSS2GGcjs = require('./chunk-T4NSS2GG.cjs');


var _chunkAGOCUPD2cjs = require('./chunk-AGOCUPD2.cjs');


var _chunkYLRXCI77cjs = require('./chunk-YLRXCI77.cjs');


var _chunkBBAXG474cjs = require('./chunk-BBAXG474.cjs');


var _chunkF625UO5Pcjs = require('./chunk-F625UO5P.cjs');


var _chunkGDR5BR6Ccjs = require('./chunk-GDR5BR6C.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpdateOneWithoutPeriodsFollowedNestedInputSchema.ts
var _zod = require('zod');
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkF625UO5Pcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkGDR5BR6Ccjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkBBAXG474cjs.DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkT4NSS2GGcjs.DietUpsertWithoutPeriodsFollowedInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkBKCKOYFZcjs.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkYLRXCI77cjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkAGOCUPD2cjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema;




exports.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema; exports.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default;
//# sourceMappingURL=chunk-IAGBENOU.cjs.map