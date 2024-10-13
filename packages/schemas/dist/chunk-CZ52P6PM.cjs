"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKMEXOZLVcjs = require('./chunk-KMEXOZLV.cjs');


var _chunkTJOIWWGCcjs = require('./chunk-TJOIWWGC.cjs');


var _chunkSPSBIYNQcjs = require('./chunk-SPSBIYNQ.cjs');


var _chunkPYEASVYGcjs = require('./chunk-PYEASVYG.cjs');


var _chunkFDECQJHKcjs = require('./chunk-FDECQJHK.cjs');


var _chunkB7JANBUYcjs = require('./chunk-B7JANBUY.cjs');


var _chunk3T6CK22Ccjs = require('./chunk-3T6CK22C.cjs');


var _chunk2XENYBJRcjs = require('./chunk-2XENYBJR.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');

// src/database/inputTypeSchemas/DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema.ts
var _zod = require('zod');
var DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk3T6CK22Ccjs.DefinitionCreateWithoutMdxNoteInputSchema).array(), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk2XENYBJRcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkFDECQJHKcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFDECQJHKcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkPYEASVYGcjs.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkPYEASVYGcjs.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkB7JANBUYcjs.DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkKMEXOZLVcjs.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkKMEXOZLVcjs.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkTJOIWWGCcjs.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkTJOIWWGCcjs.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkSPSBIYNQcjs.DefinitionScalarWhereInputSchema), _zod.z.lazy(() => _chunkSPSBIYNQcjs.DefinitionScalarWhereInputSchema).array()]).optional()
}).strict();
var DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema_default = DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema;




exports.DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema = DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema; exports.DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema_default = DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema_default;
//# sourceMappingURL=chunk-CZ52P6PM.cjs.map