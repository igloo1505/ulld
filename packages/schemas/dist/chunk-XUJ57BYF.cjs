"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTOAN4GUZcjs = require('./chunk-TOAN4GUZ.cjs');


var _chunkU636M3SOcjs = require('./chunk-U636M3SO.cjs');


var _chunkZ6HUKMBIcjs = require('./chunk-Z6HUKMBI.cjs');


var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateNestedOneWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkU636M3SOcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkZ6HUKMBIcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkTOAN4GUZcjs.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema).optional()
}).strict();
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema;




exports.MdxNoteCreateNestedOneWithoutDefinitionsInputSchema = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema; exports.MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-XUJ57BYF.cjs.map