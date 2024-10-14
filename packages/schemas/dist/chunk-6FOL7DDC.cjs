"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4IVO4PZMcjs = require('./chunk-4IVO4PZM.cjs');


var _chunkB6KUOVBGcjs = require('./chunk-B6KUOVBG.cjs');


var _chunk4BANTE64cjs = require('./chunk-4BANTE64.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationCreateNestedManyWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationCreateNestedManyWithoutRelatedValuesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema).array(), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4IVO4PZMcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EquationCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationCreateNestedManyWithoutRelatedValuesInputSchema;




exports.EquationCreateNestedManyWithoutRelatedValuesInputSchema = EquationCreateNestedManyWithoutRelatedValuesInputSchema; exports.EquationCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationCreateNestedManyWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-6FOL7DDC.cjs.map