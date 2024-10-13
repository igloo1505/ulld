"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7WEPVRKScjs = require('./chunk-7WEPVRKS.cjs');


var _chunkGA63QWOScjs = require('./chunk-GA63QWOS.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkGA63QWOScjs.DefinitionUpdateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk7WEPVRKScjs.DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema;




exports.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema; exports.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-KMEXOZLV.cjs.map