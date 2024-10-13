"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSPSBIYNQcjs = require('./chunk-SPSBIYNQ.cjs');


var _chunkYUPLGMHAcjs = require('./chunk-YUPLGMHA.cjs');


var _chunkMKD2LA6Tcjs = require('./chunk-MKD2LA6T.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkSPSBIYNQcjs.DefinitionScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkMKD2LA6Tcjs.DefinitionUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkYUPLGMHAcjs.DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema_default = DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema;




exports.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema = DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema; exports.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema_default = DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-TJOIWWGC.cjs.map