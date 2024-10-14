"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5RIV3V2Vcjs = require('./chunk-5RIV3V2V.cjs');


var _chunk4QRH4C5Tcjs = require('./chunk-4QRH4C5T.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk4QRH4C5Tcjs.DietaryItemUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk5RIV3V2Vcjs.DietaryItemUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema;




exports.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema; exports.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-NEMLCMHY.cjs.map