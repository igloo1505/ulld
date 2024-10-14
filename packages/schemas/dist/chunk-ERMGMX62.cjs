"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTPQ37K4Vcjs = require('./chunk-TPQ37K4V.cjs');


var _chunkGV22PVHXcjs = require('./chunk-GV22PVHX.cjs');


var _chunkWEKQ4OK5cjs = require('./chunk-WEKQ4OK5.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkGV22PVHXcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkWEKQ4OK5cjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkTPQ37K4Vcjs.DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default = DietCreateNestedOneWithoutPeriodsFollowedInputSchema;




exports.DietCreateNestedOneWithoutPeriodsFollowedInputSchema = DietCreateNestedOneWithoutPeriodsFollowedInputSchema; exports.DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default = DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-ERMGMX62.cjs.map