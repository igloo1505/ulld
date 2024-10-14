"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5VUN66DYcjs = require('./chunk-5VUN66DY.cjs');


var _chunkHD2AN675cjs = require('./chunk-HD2AN675.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

// src/database/inputTypeSchemas/EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkHD2AN675cjs.EquationUpdateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunk5VUN66DYcjs.EquationUncheckedUpdateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema;




exports.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema; exports.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-N6IB75AB.cjs.map