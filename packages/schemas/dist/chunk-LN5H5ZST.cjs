"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4IVO4PZMcjs = require('./chunk-4IVO4PZM.cjs');


var _chunkB6KUOVBGcjs = require('./chunk-B6KUOVBG.cjs');


var _chunk4BANTE64cjs = require('./chunk-4BANTE64.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema).array(), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema;




exports.EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema; exports.EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-LN5H5ZST.cjs.map