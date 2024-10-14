"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7KHI2BUFcjs = require('./chunk-7KHI2BUF.cjs');


var _chunkXPCKW6HZcjs = require('./chunk-XPCKW6HZ.cjs');


var _chunkG5DWHP4Qcjs = require('./chunk-G5DWHP4Q.cjs');


var _chunkNVW6TKHIcjs = require('./chunk-NVW6TKHI.cjs');


var _chunkI7LH4IYMcjs = require('./chunk-I7LH4IYM.cjs');


var _chunk43SG2GQCcjs = require('./chunk-43SG2GQC.cjs');


var _chunkRDIU6AYAcjs = require('./chunk-RDIU6AYA.cjs');


var _chunkFRPCP2GVcjs = require('./chunk-FRPCP2GV.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateManyWithoutMdxNoteNestedInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateManyWithoutMdxNoteNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema).array(), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkI7LH4IYMcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkI7LH4IYMcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkNVW6TKHIcjs.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkNVW6TKHIcjs.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunk43SG2GQCcjs.DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk7KHI2BUFcjs.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunk7KHI2BUFcjs.DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkXPCKW6HZcjs.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkXPCKW6HZcjs.DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkG5DWHP4Qcjs.DefinitionScalarWhereInputSchema), _zod.z.lazy(() => _chunkG5DWHP4Qcjs.DefinitionScalarWhereInputSchema).array()]).optional()
}).strict();
var DefinitionUpdateManyWithoutMdxNoteNestedInputSchema_default = DefinitionUpdateManyWithoutMdxNoteNestedInputSchema;




exports.DefinitionUpdateManyWithoutMdxNoteNestedInputSchema = DefinitionUpdateManyWithoutMdxNoteNestedInputSchema; exports.DefinitionUpdateManyWithoutMdxNoteNestedInputSchema_default = DefinitionUpdateManyWithoutMdxNoteNestedInputSchema_default;
//# sourceMappingURL=chunk-NRVC5MID.cjs.map