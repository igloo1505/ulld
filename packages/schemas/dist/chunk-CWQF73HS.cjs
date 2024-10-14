"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkET24QIGDcjs = require('./chunk-ET24QIGD.cjs');


var _chunkKNZC7KJBcjs = require('./chunk-KNZC7KJB.cjs');


var _chunkWP5ZWFXFcjs = require('./chunk-WP5ZWFXF.cjs');


var _chunkZJXPP7P6cjs = require('./chunk-ZJXPP7P6.cjs');


var _chunkTOAN4GUZcjs = require('./chunk-TOAN4GUZ.cjs');


var _chunkU636M3SOcjs = require('./chunk-U636M3SO.cjs');


var _chunkZ6HUKMBIcjs = require('./chunk-Z6HUKMBI.cjs');


var _chunkIXLNEA6Scjs = require('./chunk-IXLNEA6S.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkU636M3SOcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkZ6HUKMBIcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkTOAN4GUZcjs.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkKNZC7KJBcjs.MdxNoteUpsertWithoutDefinitionsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkIXLNEA6Scjs.MdxNoteWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkET24QIGDcjs.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkZJXPP7P6cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkWP5ZWFXFcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]).optional()
}).strict();
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema;




exports.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema; exports.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default;
//# sourceMappingURL=chunk-CWQF73HS.cjs.map