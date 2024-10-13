"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6UMIAGPRcjs = require('./chunk-6UMIAGPR.cjs');


var _chunkOSJNFAF7cjs = require('./chunk-OSJNFAF7.cjs');


var _chunkYF2XVLJAcjs = require('./chunk-YF2XVLJA.cjs');


var _chunk4I3UHCSKcjs = require('./chunk-4I3UHCSK.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/MdxNoteUpsertWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpsertWithoutDefinitionsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkOSJNFAF7cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk6UMIAGPRcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkYF2XVLJAcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk4I3UHCSKcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]),
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema).optional()
}).strict();
var MdxNoteUpsertWithoutDefinitionsInputSchema_default = MdxNoteUpsertWithoutDefinitionsInputSchema;




exports.MdxNoteUpsertWithoutDefinitionsInputSchema = MdxNoteUpsertWithoutDefinitionsInputSchema; exports.MdxNoteUpsertWithoutDefinitionsInputSchema_default = MdxNoteUpsertWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-VSVP2MUB.cjs.map