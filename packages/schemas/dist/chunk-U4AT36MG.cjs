"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFLGXTWKWcjs = require('./chunk-FLGXTWKW.cjs');


var _chunkDF3APE2Bcjs = require('./chunk-DF3APE2B.cjs');


var _chunkH7LIQO3Jcjs = require('./chunk-H7LIQO3J.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkFLGXTWKWcjs.DietaryItemCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkFLGXTWKWcjs.DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema_default = DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema;




exports.DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema = DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema; exports.DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema_default = DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-U4AT36MG.cjs.map