"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3T6CK22Ccjs = require('./chunk-3T6CK22C.cjs');


var _chunk2XENYBJRcjs = require('./chunk-2XENYBJR.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/inputTypeSchemas/DefinitionCreateOrConnectWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default = DefinitionCreateOrConnectWithoutMdxNoteInputSchema;




exports.DefinitionCreateOrConnectWithoutMdxNoteInputSchema = DefinitionCreateOrConnectWithoutMdxNoteInputSchema; exports.DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default = DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-FDECQJHK.cjs.map