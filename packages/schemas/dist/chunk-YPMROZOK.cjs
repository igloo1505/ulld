"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYF2XVLJAcjs = require('./chunk-YF2XVLJA.cjs');


var _chunk4I3UHCSKcjs = require('./chunk-4I3UHCSK.cjs');


var _chunk563CA7KFcjs = require('./chunk-563CA7KF.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateOrConnectWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk563CA7KFcjs.MdxNoteWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkYF2XVLJAcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk4I3UHCSKcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema;




exports.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema; exports.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-YPMROZOK.cjs.map