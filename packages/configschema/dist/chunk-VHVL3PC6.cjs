"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/commandPalette.ts
var _zod = require('zod');
var itemBase = _zod.z.object({
  label: _zod.z.string(),
  isAvailable: _zod.z.string().optional().describe("An optional export field in your package.json that resolves to a file with a default export of a synchronous function that accepts the current pathname and returns a boolean to indicate if this item should be shown in the command palette. This method is called just before the item is to be shown.")
  // Should receive props related to the path name, the front matter of the note and possibly other properties to determine if it should be displayed, and be called once when the list containing that item is first displayed.
});
var pluginCommandPaletteSchema = _zod.z.union([
  itemBase.extend({ action: _zod.z.function() }),
  itemBase.extend({
    href: _zod.z.union([_zod.z.string(), _zod.z.function().returns(_zod.z.string())])
  })
]).array();



exports.pluginCommandPaletteSchema = pluginCommandPaletteSchema;
//# sourceMappingURL=chunk-VHVL3PC6.cjs.map