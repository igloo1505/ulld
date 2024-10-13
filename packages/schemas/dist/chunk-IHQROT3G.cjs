"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3AXGNWA4cjs = require('./chunk-3AXGNWA4.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk3AXGNWA4cjs.EquationUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default = EquationUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.EquationUpdateManyWithWhereWithoutSubjectsInputSchema = EquationUpdateManyWithWhereWithoutSubjectsInputSchema; exports.EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default = EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-IHQROT3G.cjs.map