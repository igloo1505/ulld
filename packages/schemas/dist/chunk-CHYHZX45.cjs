"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF6YHTM37cjs = require('./chunk-F6YHTM37.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkF6YHTM37cjs.EquationUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTagsInputSchema_default = EquationUpdateManyWithWhereWithoutTagsInputSchema;




exports.EquationUpdateManyWithWhereWithoutTagsInputSchema = EquationUpdateManyWithWhereWithoutTagsInputSchema; exports.EquationUpdateManyWithWhereWithoutTagsInputSchema_default = EquationUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-CHYHZX45.cjs.map