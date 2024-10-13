"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7ZQYIBUTcjs = require('./chunk-7ZQYIBUT.cjs');


var _chunkUYL5KMDIcjs = require('./chunk-UYL5KMDI.cjs');


var _chunkY3CLBP7Ccjs = require('./chunk-Y3CLBP7C.cjs');


var _chunkQRWDFL2Wcjs = require('./chunk-QRWDFL2W.cjs');


var _chunkIH7GARQQcjs = require('./chunk-IH7GARQQ.cjs');


var _chunkUQFET4CBcjs = require('./chunk-UQFET4CB.cjs');


var _chunkI3XVMKYYcjs = require('./chunk-I3XVMKYY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateManyWithoutDietNestedInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyWithoutDietNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkUQFET4CBcjs.DietaryItemCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkI3XVMKYYcjs.DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkIH7GARQQcjs.DietaryItemCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkIH7GARQQcjs.DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkY3CLBP7Ccjs.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkY3CLBP7Ccjs.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkQRWDFL2Wcjs.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkQRWDFL2Wcjs.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk7ZQYIBUTcjs.DietaryItemUpdateManyWithWhereWithoutDietInputSchema), _zod.z.lazy(() => _chunk7ZQYIBUTcjs.DietaryItemUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkUYL5KMDIcjs.DietaryItemScalarWhereInputSchema), _zod.z.lazy(() => _chunkUYL5KMDIcjs.DietaryItemScalarWhereInputSchema).array()]).optional()
}).strict();
var DietaryItemUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUpdateManyWithoutDietNestedInputSchema;




exports.DietaryItemUpdateManyWithoutDietNestedInputSchema = DietaryItemUpdateManyWithoutDietNestedInputSchema; exports.DietaryItemUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUpdateManyWithoutDietNestedInputSchema_default;
//# sourceMappingURL=chunk-24L5ZGLA.cjs.map