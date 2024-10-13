"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBBAXG474cjs = require('./chunk-BBAXG474.cjs');


var _chunkF625UO5Pcjs = require('./chunk-F625UO5P.cjs');


var _chunkGDR5BR6Ccjs = require('./chunk-GDR5BR6C.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkF625UO5Pcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkGDR5BR6Ccjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkBBAXG474cjs.DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default = DietCreateNestedOneWithoutPeriodsFollowedInputSchema;




exports.DietCreateNestedOneWithoutPeriodsFollowedInputSchema = DietCreateNestedOneWithoutPeriodsFollowedInputSchema; exports.DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default = DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-G2ILON2S.cjs.map