"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKYGLJXRGcjs = require('./chunk-KYGLJXRG.cjs');


var _chunkPTXVY76Ycjs = require('./chunk-PTXVY76Y.cjs');


var _chunkTKQYIIUNcjs = require('./chunk-TKQYIIUN.cjs');


var _chunkC3V2CAYXcjs = require('./chunk-C3V2CAYX.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/inputTypeSchemas/EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkPTXVY76Ycjs.EquationUpdateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkKYGLJXRGcjs.EquationUncheckedUpdateWithoutRelatedValuesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema;




exports.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema; exports.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-DNRIYHEH.cjs.map