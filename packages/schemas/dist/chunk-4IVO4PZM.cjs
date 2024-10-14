"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB6KUOVBGcjs = require('./chunk-B6KUOVBG.cjs');


var _chunk4BANTE64cjs = require('./chunk-4BANTE64.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationCreateOrConnectWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationCreateOrConnectWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationCreateOrConnectWithoutRelatedValuesInputSchema_default = EquationCreateOrConnectWithoutRelatedValuesInputSchema;




exports.EquationCreateOrConnectWithoutRelatedValuesInputSchema = EquationCreateOrConnectWithoutRelatedValuesInputSchema; exports.EquationCreateOrConnectWithoutRelatedValuesInputSchema_default = EquationCreateOrConnectWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-4IVO4PZM.cjs.map