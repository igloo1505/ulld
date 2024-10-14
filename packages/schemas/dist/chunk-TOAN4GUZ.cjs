"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU636M3SOcjs = require('./chunk-U636M3SO.cjs');


var _chunkZ6HUKMBIcjs = require('./chunk-Z6HUKMBI.cjs');


var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateOrConnectWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkU636M3SOcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkZ6HUKMBIcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema;




exports.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema; exports.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-TOAN4GUZ.cjs.map