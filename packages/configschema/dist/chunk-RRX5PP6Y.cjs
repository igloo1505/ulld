"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCBXEQXAZcjs = require('./chunk-CBXEQXAZ.cjs');


var _chunkLT3FMETMcjs = require('./chunk-LT3FMETM.cjs');

// src/baseApp/slot.tsx
var _zod = require('zod');
var baseAppSlot = _zod.z.object({
  parentSlot: _chunkLT3FMETMcjs.slotKeySchema,
  subSlot: _zod.z.string(),
  path: _zod.z.string(),
  clientOnly: _zod.z.boolean().default(false),
  type: _zod.z.union([
    _zod.z.literal("page"),
    _zod.z.literal("component"),
    _zod.z.literal("embeddable")
  ]),
  propsExtends: _zod.z.string().optional(),
  embeddables: _zod.z.union([_chunkCBXEQXAZcjs.embeddableConfigSchema, _chunkCBXEQXAZcjs.embeddableConfigSchema.array()]).transform((a) => Array.isArray(a) ? a : [a])
});



exports.baseAppSlot = baseAppSlot;
//# sourceMappingURL=chunk-RRX5PP6Y.cjs.map