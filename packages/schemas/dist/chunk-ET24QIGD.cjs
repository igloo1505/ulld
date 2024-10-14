"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWP5ZWFXFcjs = require('./chunk-WP5ZWFXF.cjs');


var _chunkZJXPP7P6cjs = require('./chunk-ZJXPP7P6.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZJXPP7P6cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkWP5ZWFXFcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema;




exports.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema; exports.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-ET24QIGD.cjs.map