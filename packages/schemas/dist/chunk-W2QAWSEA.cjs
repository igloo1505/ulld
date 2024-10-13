"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKYGLJXRGcjs = require('./chunk-KYGLJXRG.cjs');


var _chunkPTXVY76Ycjs = require('./chunk-PTXVY76Y.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/inputTypeSchemas/EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPTXVY76Ycjs.EquationUpdateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkKYGLJXRGcjs.EquationUncheckedUpdateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema;




exports.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema; exports.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-W2QAWSEA.cjs.map