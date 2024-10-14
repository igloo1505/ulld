"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5RIV3V2Vcjs = require('./chunk-5RIV3V2V.cjs');


var _chunk4QRH4C5Tcjs = require('./chunk-4QRH4C5T.cjs');


var _chunkDF3APE2Bcjs = require('./chunk-DF3APE2B.cjs');


var _chunkH7LIQO3Jcjs = require('./chunk-H7LIQO3J.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk4QRH4C5Tcjs.DietaryItemUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk5RIV3V2Vcjs.DietaryItemUncheckedUpdateWithoutDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema;




exports.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema; exports.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default = DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-JDAI6YD5.cjs.map