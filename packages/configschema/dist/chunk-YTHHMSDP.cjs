"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkYKNOVF5Kcjs = require('./chunk-YKNOVF5K.cjs');


var _chunkF2EQTDOEcjs = require('./chunk-F2EQTDOE.cjs');


var _chunk7FRG3H7Vcjs = require('./chunk-7FRG3H7V.cjs');

// src/buildStaticData/main.ts
var _zod = require('zod');
var _buildStaticDatajson = require('@ulld/utilities/buildStaticData.json'); var _buildStaticDatajson2 = _interopRequireDefault(_buildStaticDatajson);
var _general = require('@ulld/utilities/general');
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = _general.replaceRecursively.call(void 0, k, /\./gim, "");
  }
  return ext;
};
var buildStaticDataSchema = _zod.z.object({
  fsRoot: _zod.z.string(),
  navigationLinks: _chunk7FRG3H7Vcjs.navigationLinkSchema.array().default([]).transform((a) => [
    ...a,
    {
      label: "Settings",
      href: "/settings",
      icon: "cog"
    }
  ]),
  settingPages: _chunkF2EQTDOEcjs.settingsPageOutputSchema.array().default([]),
  componentDocs: _chunkYKNOVF5Kcjs.componentDocumentationSchema.array().default([]),
  transpilePackages: _zod.z.string().array().default([]),
  tailwindSources: _zod.z.string().array().default([])
}).transform((a) => {
  return {
    ...a,
    parsableExtensions: _buildStaticDatajson2.default.parsableFileExtensions,
    filetypeSpecificAppendices: getFileTypeAppendices(
      _buildStaticDatajson2.default.parsableFileExtensions
    ),
    internalDocumentTypes: _buildStaticDatajson2.default.internalDocumentTypes,
    fileTypes: {
      image: ["jpeg", "jpg", "webp", "png", "heif", "gif"]
    }
  };
});



exports.buildStaticDataSchema = buildStaticDataSchema;
//# sourceMappingURL=chunk-YTHHMSDP.cjs.map