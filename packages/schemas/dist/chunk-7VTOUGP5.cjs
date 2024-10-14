"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWGBXFH74cjs = require('./chunk-WGBXFH74.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkWGBXFH74cjs.EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;




exports.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema; exports.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-7VTOUGP5.cjs.map