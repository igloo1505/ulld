"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ5CEA5VScjs = require('./chunk-Q5CEA5VS.cjs');


var _chunkVSVP2MUBcjs = require('./chunk-VSVP2MUB.cjs');


var _chunk6UMIAGPRcjs = require('./chunk-6UMIAGPR.cjs');


var _chunkOSJNFAF7cjs = require('./chunk-OSJNFAF7.cjs');


var _chunkYPMROZOKcjs = require('./chunk-YPMROZOK.cjs');


var _chunkYF2XVLJAcjs = require('./chunk-YF2XVLJA.cjs');


var _chunk4I3UHCSKcjs = require('./chunk-4I3UHCSK.cjs');


var _chunk563CA7KFcjs = require('./chunk-563CA7KF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkYF2XVLJAcjs.MdxNoteCreateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk4I3UHCSKcjs.MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkYPMROZOKcjs.MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkVSVP2MUBcjs.MdxNoteUpsertWithoutDefinitionsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunk563CA7KFcjs.MdxNoteWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkQ5CEA5VScjs.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunkOSJNFAF7cjs.MdxNoteUpdateWithoutDefinitionsInputSchema), _zod.z.lazy(() => _chunk6UMIAGPRcjs.MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]).optional()
}).strict();
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema;




exports.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema; exports.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default;
//# sourceMappingURL=chunk-2OWFNJS2.cjs.map