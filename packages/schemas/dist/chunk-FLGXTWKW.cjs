"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDF3APE2Bcjs = require('./chunk-DF3APE2B.cjs');


var _chunkH7LIQO3Jcjs = require('./chunk-H7LIQO3J.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateOrConnectWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutDietInputSchema_default = DietaryItemCreateOrConnectWithoutDietInputSchema;




exports.DietaryItemCreateOrConnectWithoutDietInputSchema = DietaryItemCreateOrConnectWithoutDietInputSchema; exports.DietaryItemCreateOrConnectWithoutDietInputSchema_default = DietaryItemCreateOrConnectWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-FLGXTWKW.cjs.map