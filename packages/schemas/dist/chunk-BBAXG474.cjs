"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF625UO5Pcjs = require('./chunk-F625UO5P.cjs');


var _chunkGDR5BR6Ccjs = require('./chunk-GDR5BR6C.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkF625UO5Pcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkGDR5BR6Ccjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default = DietCreateOrConnectWithoutPeriodsFollowedInputSchema;




exports.DietCreateOrConnectWithoutPeriodsFollowedInputSchema = DietCreateOrConnectWithoutPeriodsFollowedInputSchema; exports.DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default = DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-BBAXG474.cjs.map