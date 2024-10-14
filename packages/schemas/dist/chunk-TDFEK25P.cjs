"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZAIMXU4Kcjs = require('./chunk-ZAIMXU4K.cjs');


var _chunkTPWVDMTYcjs = require('./chunk-TPWVDMTY.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTPWVDMTYcjs.DietUpdateWithoutPeriodsFollowedInputSchema), _zod.z.lazy(() => _chunkZAIMXU4Kcjs.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema;




exports.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema; exports.DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-TDFEK25P.cjs.map