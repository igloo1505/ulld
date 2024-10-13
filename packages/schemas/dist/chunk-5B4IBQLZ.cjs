"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4F3EK2DCcjs = require('./chunk-4F3EK2DC.cjs');

// src/database/outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk4F3EK2DCcjs.RelatedValuesCountOutputTypeSelectSchema).nullish()
}).strict();
var RelatedValuesCountOutputTypeArgsSchema_default = _chunk4F3EK2DCcjs.RelatedValuesCountOutputTypeSelectSchema;




exports.RelatedValuesCountOutputTypeArgsSchema = RelatedValuesCountOutputTypeArgsSchema; exports.RelatedValuesCountOutputTypeArgsSchema_default = RelatedValuesCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-5B4IBQLZ.cjs.map