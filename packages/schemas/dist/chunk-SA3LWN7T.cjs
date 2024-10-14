"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI7LH4IYMcjs = require('./chunk-I7LH4IYM.cjs');


var _chunk43SG2GQCcjs = require('./chunk-43SG2GQC.cjs');


var _chunkRDIU6AYAcjs = require('./chunk-RDIU6AYA.cjs');


var _chunkFRPCP2GVcjs = require('./chunk-FRPCP2GV.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/inputTypeSchemas/DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema).array(), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkI7LH4IYMcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkI7LH4IYMcjs.DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunk43SG2GQCcjs.DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema).array()]).optional()
}).strict();
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema;




exports.DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema; exports.DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-SA3LWN7T.cjs.map