"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIOYK3AMHcjs = require('./chunk-IOYK3AMH.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkIOYK3AMHcjs.EquationUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default = EquationUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.EquationUpdateManyWithWhereWithoutSubjectsInputSchema = EquationUpdateManyWithWhereWithoutSubjectsInputSchema; exports.EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default = EquationUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-463IPMZL.cjs.map