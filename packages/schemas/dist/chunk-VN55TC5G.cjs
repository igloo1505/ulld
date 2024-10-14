"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTDFEK25Pcjs = require('./chunk-TDFEK25P.cjs');


var _chunkEHUS72DYcjs = require('./chunk-EHUS72DY.cjs');


var _chunkZAIMXU4Kcjs = require('./chunk-ZAIMXU4K.cjs');


var _chunkTPWVDMTYcjs = require('./chunk-TPWVDMTY.cjs');


var _chunkTPQ37K4Vcjs = require('./chunk-TPQ37K4V.cjs');


var _chunkGV22PVHXcjs = require('./chunk-GV22PVHX.cjs');


var _chunkWEKQ4OK5cjs = require('./chunk-WEKQ4OK5.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpdateOneWithoutPeriodsFollowedNestedInputSchema.ts
var _zod = require('zod');
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkGV22PVHXcjs.DietCreateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkWEKQ4OK5cjs.DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkTPQ37K4Vcjs.DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkEHUS72DYcjs.DietUpsertWithoutPeriodsFollowedInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkTDFEK25Pcjs.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkTPWVDMTYcjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkZAIMXU4Kcjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema;




exports.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema; exports.DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default;
//# sourceMappingURL=chunk-VN55TC5G.cjs.map