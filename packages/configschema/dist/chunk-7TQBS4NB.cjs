"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkH6BHRL32cjs = require('./chunk-H6BHRL32.cjs');


var _chunkIB3WFHXJcjs = require('./chunk-IB3WFHXJ.cjs');


var _chunkLKRJO5IZcjs = require('./chunk-LKRJO5IZ.cjs');

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
  navigationLinks: _chunkLKRJO5IZcjs.navigationLinkSchema.array().default([]).transform((a) => [
    ...a,
    {
      label: "Settings",
      href: "/settings",
      icon: "cog"
    }
  ]),
  settingPages: _chunkIB3WFHXJcjs.settingsPageOutputSchema.array().default([]),
  componentDocs: _chunkH6BHRL32cjs.componentDocumentationSchema.array().default([]),
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
//# sourceMappingURL=chunk-7TQBS4NB.cjs.map