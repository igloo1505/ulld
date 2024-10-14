"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS4NGNKYNcjs = require('./chunk-S4NGNKYN.cjs');


var _chunkYEN3GQDQcjs = require('./chunk-YEN3GQDQ.cjs');


var _chunkRDIU6AYAcjs = require('./chunk-RDIU6AYA.cjs');


var _chunkFRPCP2GVcjs = require('./chunk-FRPCP2GV.cjs');


var _chunkGJHZIQRBcjs = require('./chunk-GJHZIQRB.cjs');

// src/database/inputTypeSchemas/DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema.ts
var _zod = require('zod');
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGJHZIQRBcjs.DefinitionWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkYEN3GQDQcjs.DefinitionUpdateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkS4NGNKYNcjs.DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkRDIU6AYAcjs.DefinitionCreateWithoutMdxNoteInputSchema), _zod.z.lazy(() => _chunkFRPCP2GVcjs.DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema;




exports.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema; exports.DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default;
//# sourceMappingURL=chunk-NVW6TKHI.cjs.map