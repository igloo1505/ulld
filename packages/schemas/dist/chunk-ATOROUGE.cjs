"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIKUPOM2Hcjs = require('./chunk-IKUPOM2H.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkIKUPOM2Hcjs.TagUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TagUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.TagUpdateManyWithWhereWithoutBibEntriesInputSchema = TagUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-ATOROUGE.cjs.map