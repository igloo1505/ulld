"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS4NGNKYNcjs = require('./chunk-S4NGNKYN.cjs');


var _chunkYEN3GQDQcjs = require('./chunk-YEN3GQDQ.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkYEN3GQDQcjs.DefinitionUpdateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkS4NGNKYNcjs.DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema;




exports.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema; exports.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-7KHI2BUF.cjs.map