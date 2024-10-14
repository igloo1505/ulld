"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3NAKX7BFcjs = require('./chunk-3NAKX7BF.cjs');

// src/database/outputTypeSchemas/QAPairCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var QAPairCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk3NAKX7BFcjs.QAPairCountOutputTypeSelectSchema).nullish()
}).strict();
var QAPairCountOutputTypeArgsSchema_default = _chunk3NAKX7BFcjs.QAPairCountOutputTypeSelectSchema;




exports.QAPairCountOutputTypeArgsSchema = QAPairCountOutputTypeArgsSchema; exports.QAPairCountOutputTypeArgsSchema_default = QAPairCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-BSVEWJID.cjs.map