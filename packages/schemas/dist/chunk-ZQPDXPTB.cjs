"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFDECQJHKcjs = require('./chunk-FDECQJHK.cjs');


var _chunkB7JANBUYcjs = require('./chunk-B7JANBUY.cjs');


var _chunk3T6CK22Ccjs = require('./chunk-3T6CK22C.cjs');


var _chunk2XENYBJRcjs = require('./chunk-2XENYBJR.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/inputTypeSchemas/DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema).array(), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkFDECQJHKcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFDECQJHKcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkB7JANBUYcjs.DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema).array()]).optional()
}).strict();
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema;




exports.DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema; exports.DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-ZQPDXPTB.cjs.map