"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSFYGBRYPcjs = require('./chunk-SFYGBRYP.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSFYGBRYPcjs.EquationUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTagsInputSchema_default = EquationUpdateManyWithWhereWithoutTagsInputSchema;




exports.EquationUpdateManyWithWhereWithoutTagsInputSchema = EquationUpdateManyWithWhereWithoutTagsInputSchema; exports.EquationUpdateManyWithWhereWithoutTagsInputSchema_default = EquationUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-FELHAVFL.cjs.map