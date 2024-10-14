"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk54X7IICScjs = require('./chunk-54X7IICS.cjs');


var _chunkWNEULKNEcjs = require('./chunk-WNEULKNE.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWNEULKNEcjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk54X7IICScjs.EquationUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-JAOVMJRU.cjs.map