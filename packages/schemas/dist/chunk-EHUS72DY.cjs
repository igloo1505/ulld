"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZAIMXU4Kcjs = require('./chunk-ZAIMXU4K.cjs');


var _chunkTPWVDMTYcjs = require('./chunk-TPWVDMTY.cjs');


var _chunkGV22PVHXcjs = require('./chunk-GV22PVHX.cjs');


var _chunkWEKQ4OK5cjs = require('./chunk-WEKQ4OK5.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpsertWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUpsertWithoutPeriodsFollowedInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkTPWVDMTYcjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkZAIMXU4Kcjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkGV22PVHXcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkWEKQ4OK5cjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]),
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutPeriodsFollowedInputSchema_default = DietUpsertWithoutPeriodsFollowedInputSchema;




exports.DietUpsertWithoutPeriodsFollowedInputSchema = DietUpsertWithoutPeriodsFollowedInputSchema; exports.DietUpsertWithoutPeriodsFollowedInputSchema_default = DietUpsertWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-EHUS72DY.cjs.map