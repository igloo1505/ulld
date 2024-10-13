"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6UMIAGPRcjs = require('./chunk-6UMIAGPR.cjs');


var _chunkOSJNFAF7cjs = require('./chunk-OSJNFAF7.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOSJNFAF7cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk6UMIAGPRcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema;




exports.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema; exports.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-Q5CEA5VS.cjs.map