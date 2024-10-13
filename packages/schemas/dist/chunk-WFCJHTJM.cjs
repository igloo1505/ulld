"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYPMROZOKcjs = require('./chunk-YPMROZOK.cjs');


var _chunkYF2XVLJAcjs = require('./chunk-YF2XVLJA.cjs');


var _chunk4I3UHCSKcjs = require('./chunk-4I3UHCSK.cjs');


var _chunk563CA7KFcjs = require('./chunk-563CA7KF.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateNestedOneWithoutDefinitionsInputSchema.ts
var _zod = require('zod');
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkYF2XVLJAcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk4I3UHCSKcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkYPMROZOKcjs.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunk563CA7KFcjs.MdxNoteWhereUniqueInputSchema).optional()
}).strict();
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema;




exports.MdxNoteCreateNestedOneWithoutDefinitionsInputSchema = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema; exports.MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default;
//# sourceMappingURL=chunk-WFCJHTJM.cjs.map