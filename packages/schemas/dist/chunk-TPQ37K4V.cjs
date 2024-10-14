"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGV22PVHXcjs = require('./chunk-GV22PVHX.cjs');


var _chunkWEKQ4OK5cjs = require('./chunk-WEKQ4OK5.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkGV22PVHXcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkWEKQ4OK5cjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default = DietCreateOrConnectWithoutPeriodsFollowedInputSchema;




exports.DietCreateOrConnectWithoutPeriodsFollowedInputSchema = DietCreateOrConnectWithoutPeriodsFollowedInputSchema; exports.DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default = DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-TPQ37K4V.cjs.map