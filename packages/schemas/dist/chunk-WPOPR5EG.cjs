"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNVFLNVQ6cjs = require('./chunk-NVFLNVQ6.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNVFLNVQ6cjs.EquationUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTopicsInputSchema_default = EquationUpdateManyWithWhereWithoutTopicsInputSchema;




exports.EquationUpdateManyWithWhereWithoutTopicsInputSchema = EquationUpdateManyWithWhereWithoutTopicsInputSchema; exports.EquationUpdateManyWithWhereWithoutTopicsInputSchema_default = EquationUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-WPOPR5EG.cjs.map