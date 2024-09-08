'use strict';

var fs = require('fs');
var path = require('path');
var zod = require('zod');
var buildData = require('@ulld/utilities/buildStaticData.json');
var general = require('@ulld/utilities/general');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);
var buildData__default = /*#__PURE__*/_interopDefault(buildData);

// src/__scripts__/getTestStaticBuildData.ts
var navigationLinkCategory = zod.z.union([
  zod.z.literal("math"),
  zod.z.literal("snippets"),
  zod.z.literal("code"),
  zod.z.literal("AI"),
  zod.z.literal("ML"),
  zod.z.literal("writing"),
  zod.z.literal("search"),
  zod.z.literal("notebooks"),
  zod.z.literal("database"),
  zod.z.literal("work"),
  zod.z.literal("school"),
  zod.z.literal("organization"),
  zod.z.literal("task-management"),
  zod.z.literal("academic"),
  zod.z.literal("research"),
  zod.z.literal("project-planning"),
  zod.z.literal("calendar"),
  zod.z.literal("general")
]);

// src/developer/navigationLink.ts
var navigationLinkSchema = zod.z.object({
  label: zod.z.string(),
  href: zod.z.string(),
  icon: zod.z.string().optional(),
  pluginName: zod.z.string().optional(),
  category: navigationLinkCategory.default("general")
});
var settingsPageOutputSchema = zod.z.object({
  title: zod.z.string().optional(),
  subtitle: zod.z.string().optional(),
  href: zod.z.string(),
  pluginName: zod.z.string()
});
var componentDocumentationSchema = zod.z.object({
  pluginName: zod.z.string(),
  componentName: zod.z.string(),
  embeddableSyntax: zod.z.string().describe("The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.").array().default([]),
  urls: zod.z.object({
    short: zod.z.string().optional(),
    full: zod.z.string().optional()
  }),
  filePaths: zod.z.object({
    short: zod.z.string().optional(),
    full: zod.z.string().optional()
  }),
  tags: zod.z.string().array().default([]),
  componentId: zod.z.string()
});
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = general.replaceRecursively(k, /\./gim, "");
  }
  return ext;
};
var buildStaticDataSchema = zod.z.object({
  fsRoot: zod.z.string(),
  navigationLinks: navigationLinkSchema.array().default([]).transform((a) => [
    ...a,
    {
      label: "Settings",
      href: "/settings",
      icon: "cog"
    }
  ]),
  settingPages: settingsPageOutputSchema.array().default([]),
  componentDocs: componentDocumentationSchema.array().default([]),
  transpilePackages: zod.z.string().array().default([]),
  tailwindSources: zod.z.string().array().default([])
}).transform((a) => {
  return {
    ...a,
    parsableExtensions: buildData__default.default.parsableFileExtensions,
    filetypeSpecificAppendices: getFileTypeAppendices(
      buildData__default.default.parsableFileExtensions
    ),
    internalDocumentTypes: buildData__default.default.internalDocumentTypes,
    fileTypes: {
      image: ["jpeg", "jpg", "webp", "png", "heif", "gif"]
    }
  };
});

// src/__scripts__/getTestStaticBuildData.ts
var writeTestStaticBuildData = (targetPath = process.env.ULLD_TEST_ROOT) => {
  let testData = {
    fsRoot: targetPath
  };
  const target = path__default.default.join(targetPath, "ulldBuildData.json");
  const data = buildStaticDataSchema.parse(testData);
  fs__default.default.writeFileSync(target, JSON.stringify(data, null, 4), {
    encoding: "utf-8"
  });
  console.log(`Wrote ulldBuildData.json to ${target}`);
};

exports.writeTestStaticBuildData = writeTestStaticBuildData;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getTestStaticBuildData.cjs.map