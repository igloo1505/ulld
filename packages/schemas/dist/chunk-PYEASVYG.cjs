"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7WEPVRKScjs = require('./chunk-7WEPVRKS.cjs');


var _chunkGA63QWOScjs = require('./chunk-GA63QWOS.cjs');


var _chunk3T6CK22Ccjs = require('./chunk-3T6CK22C.cjs');


var _chunk2XENYBJRcjs = require('./chunk-2XENYBJR.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/inputTypeSchemas/DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkGA63QWOScjs.DefinitionUpdateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk7WEPVRKScjs.DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema;




exports.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema; exports.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-PYEASVYG.cjs.map