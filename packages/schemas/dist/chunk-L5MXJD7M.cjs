"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5VUN66DYcjs = require('./chunk-5VUN66DY.cjs');


var _chunkHD2AN675cjs = require('./chunk-HD2AN675.cjs');


var _chunkB6KUOVBGcjs = require('./chunk-B6KUOVBG.cjs');


var _chunk4BANTE64cjs = require('./chunk-4BANTE64.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkHD2AN675cjs.EquationUpdateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk5VUN66DYcjs.EquationUncheckedUpdateWithoutRelatedValuesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkB6KUOVBGcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk4BANTE64cjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema;




exports.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema; exports.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-L5MXJD7M.cjs.map