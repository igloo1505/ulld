'use strict';

var zod = require('zod');

// src/developer/commandPalette.ts
var itemBase = zod.z.object({
  label: zod.z.string(),
  isAvailable: zod.z.function().returns(zod.z.boolean())
  // Should receive props related to the path name, the front matter of the note and possibly other properties to determine if it should be displayed, and be called once when the list containing that item is first displayed.
});
var pluginCommandPaletteSchema = zod.z.union([
  itemBase.extend({ action: zod.z.function() }),
  itemBase.extend({
    href: zod.z.union([zod.z.string(), zod.z.function().returns(zod.z.string())])
  })
]).array();

exports.pluginCommandPaletteSchema = pluginCommandPaletteSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=commandPalette.cjs.map