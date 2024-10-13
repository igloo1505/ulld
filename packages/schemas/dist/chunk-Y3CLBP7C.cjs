"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEAMDN75Scjs = require('./chunk-EAMDN75S.cjs');


var _chunkLAOVWHNMcjs = require('./chunk-LAOVWHNM.cjs');


var _chunkUQFET4CBcjs = require('./chunk-UQFET4CB.cjs');


var _chunkI3XVMKYYcjs = require('./chunk-I3XVMKYY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkLAOVWHNMcjs.DietaryItemUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunkEAMDN75Scjs.DietaryItemUncheckedUpdateWithoutDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema;




exports.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema; exports.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-Y3CLBP7C.cjs.map