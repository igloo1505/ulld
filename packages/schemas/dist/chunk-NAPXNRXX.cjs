"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGQP2USWRcjs = require('./chunk-GQP2USWR.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGQP2USWRcjs.EquationUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-NAPXNRXX.cjs.map