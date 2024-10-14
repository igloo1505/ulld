"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRDIU6AYAcjs = require('./chunk-RDIU6AYA.cjs');


var _chunkFRPCP2GVcjs = require('./chunk-FRPCP2GV.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/inputTypeSchemas/DefinitionCreateOrConnectWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default = DefinitionCreateOrConnectWithoutMdxNoteInputSchema;




exports.DefinitionCreateOrConnectWithoutMdxNoteInputSchema = DefinitionCreateOrConnectWithoutMdxNoteInputSchema; exports.DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default = DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-I7LH4IYM.cjs.map