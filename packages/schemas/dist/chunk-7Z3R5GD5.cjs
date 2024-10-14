"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA6IA5X76cjs = require('./chunk-A6IA5X76.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkA6IA5X76cjs.EquationUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTopicsInputSchema_default = EquationUpdateManyWithWhereWithoutTopicsInputSchema;




exports.EquationUpdateManyWithWhereWithoutTopicsInputSchema = EquationUpdateManyWithWhereWithoutTopicsInputSchema; exports.EquationUpdateManyWithWhereWithoutTopicsInputSchema_default = EquationUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-7Z3R5GD5.cjs.map