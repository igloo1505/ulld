"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUQFET4CBcjs = require('./chunk-UQFET4CB.cjs');


var _chunkI3XVMKYYcjs = require('./chunk-I3XVMKYY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateOrConnectWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutDietInputSchema_default = DietaryItemCreateOrConnectWithoutDietInputSchema;




exports.DietaryItemCreateOrConnectWithoutDietInputSchema = DietaryItemCreateOrConnectWithoutDietInputSchema; exports.DietaryItemCreateOrConnectWithoutDietInputSchema_default = DietaryItemCreateOrConnectWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-IH7GARQQ.cjs.map