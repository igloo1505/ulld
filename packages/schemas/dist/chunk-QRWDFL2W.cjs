"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEAMDN75Scjs = require('./chunk-EAMDN75S.cjs');


var _chunkLAOVWHNMcjs = require('./chunk-LAOVWHNM.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLAOVWHNMcjs.DietaryItemUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunkEAMDN75Scjs.DietaryItemUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema;




exports.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema; exports.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-QRWDFL2W.cjs.map