"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3VHUO2HEcjs = require('./chunk-3VHUO2HE.cjs');

// src/database/outputTypeSchemas/KanBanListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var KanBanListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk3VHUO2HEcjs.KanBanListCountOutputTypeSelectSchema).nullish()
}).strict();
var KanBanListCountOutputTypeArgsSchema_default = _chunk3VHUO2HEcjs.KanBanListCountOutputTypeSelectSchema;




exports.KanBanListCountOutputTypeArgsSchema = KanBanListCountOutputTypeArgsSchema; exports.KanBanListCountOutputTypeArgsSchema_default = KanBanListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-XHY77EXR.cjs.map