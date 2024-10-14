"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWP5ZWFXFcjs = require('./chunk-WP5ZWFXF.cjs');


var _chunkZJXPP7P6cjs = require('./chunk-ZJXPP7P6.cjs');


var _chunkU636M3SOcjs = require('./chunk-U636M3SO.cjs');


var _chunkZ6HUKMBIcjs = require('./chunk-Z6HUKMBI.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/MdxNoteUpsertWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpsertWithoutDefinitionsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkZJXPP7P6cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkWP5ZWFXFcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkU636M3SOcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkZ6HUKMBIcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]),
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema).optional()
}).strict();
var MdxNoteUpsertWithoutDefinitionsInputSchema_default = MdxNoteUpsertWithoutDefinitionsInputSchema;




exports.MdxNoteUpsertWithoutDefinitionsInputSchema = MdxNoteUpsertWithoutDefinitionsInputSchema; exports.MdxNoteUpsertWithoutDefinitionsInputSchema_default = MdxNoteUpsertWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-KNZC7KJB.cjs.map