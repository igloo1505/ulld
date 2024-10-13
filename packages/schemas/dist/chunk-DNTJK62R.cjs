"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ5J7VHXJcjs = require('./chunk-Z5J7VHXJ.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkZ5J7VHXJcjs.EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;




exports.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema; exports.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default = EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-DNTJK62R.cjs.map