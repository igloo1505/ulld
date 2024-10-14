"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7VTOUGP5cjs = require('./chunk-7VTOUGP5.cjs');


var _chunkN6IB75ABcjs = require('./chunk-N6IB75AB.cjs');


var _chunkL5MXJD7Mcjs = require('./chunk-L5MXJD7M.cjs');


var _chunk4IVO4PZMcjs = require('./chunk-4IVO4PZM.cjs');


var _chunkB6KUOVBGcjs = require('./chunk-B6KUOVBG.cjs');


var _chunk4BANTE64cjs = require('./chunk-4BANTE64.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithoutRelatedValuesNestedInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema).array(), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkL5MXJD7Mcjs.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkL5MXJD7Mcjs.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkN6IB75ABcjs.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkN6IB75ABcjs.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk7VTOUGP5cjs.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk7VTOUGP5cjs.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema), _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema).array()]).optional()
}).strict();
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUpdateManyWithoutRelatedValuesNestedInputSchema;




exports.EquationUpdateManyWithoutRelatedValuesNestedInputSchema = EquationUpdateManyWithoutRelatedValuesNestedInputSchema; exports.EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default;
//# sourceMappingURL=chunk-SKU73CEA.cjs.map