"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRGAC6GYHcjs = require('./chunk-RGAC6GYH.cjs');


var _chunk3XQZ5NDKcjs = require('./chunk-3XQZ5NDK.cjs');


var _chunkJDAI6YD5cjs = require('./chunk-JDAI6YD5.cjs');


var _chunkNEMLCMHYcjs = require('./chunk-NEMLCMHY.cjs');


var _chunkFLGXTWKWcjs = require('./chunk-FLGXTWKW.cjs');


var _chunkDF3APE2Bcjs = require('./chunk-DF3APE2B.cjs');


var _chunkH7LIQO3Jcjs = require('./chunk-H7LIQO3J.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema.ts
var _zod = require('zod');
var DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkDF3APE2Bcjs.DietaryItemCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkH7LIQO3Jcjs.DietaryItemUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkFLGXTWKWcjs.DietaryItemCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkFLGXTWKWcjs.DietaryItemCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkJDAI6YD5cjs.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkJDAI6YD5cjs.DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema), _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkNEMLCMHYcjs.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema), _zod.z.lazy(() => _chunkNEMLCMHYcjs.DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkRGAC6GYHcjs.DietaryItemUpdateManyWithWhereWithoutDietInputSchema), _zod.z.lazy(() => _chunkRGAC6GYHcjs.DietaryItemUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunk3XQZ5NDKcjs.DietaryItemScalarWhereInputSchema), _zod.z.lazy(() => _chunk3XQZ5NDKcjs.DietaryItemScalarWhereInputSchema).array()]).optional()
}).strict();
var DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema;




exports.DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema = DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema; exports.DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema_default = DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema_default;
//# sourceMappingURL=chunk-TT4FPM4H.cjs.map