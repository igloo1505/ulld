"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIH7GARQQcjs = require('./chunk-IH7GARQQ.cjs');


var _chunkUQFET4CBcjs = require('./chunk-UQFET4CB.cjs');


var _chunkI3XVMKYYcjs = require('./chunk-I3XVMKYY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateNestedManyWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateNestedManyWithoutDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkIH7GARQQcjs.DietaryItemCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkIH7GARQQcjs.DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietaryItemCreateNestedManyWithoutDietInputSchema_default = DietaryItemCreateNestedManyWithoutDietInputSchema;




exports.DietaryItemCreateNestedManyWithoutDietInputSchema = DietaryItemCreateNestedManyWithoutDietInputSchema; exports.DietaryItemCreateNestedManyWithoutDietInputSchema_default = DietaryItemCreateNestedManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-WF72CJG5.cjs.map