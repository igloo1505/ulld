'use strict';

var glob = require('glob');
var path4 = require('path');
var fs4 = require('fs');
var stringUtils = require('@ulld/utilities/stringUtils');
var types = require('@ulld/utilities/types');
var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');
var identity = require('@ulld/utilities/utils/identity');
var allIcons = require('@ulld/icons/names');
var buildData = require('@ulld/utilities/buildStaticData.json');
var general = require('@ulld/utilities/general');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path4__default = /*#__PURE__*/_interopDefault(path4);
var fs4__default = /*#__PURE__*/_interopDefault(fs4);
var allIcons__default = /*#__PURE__*/_interopDefault(allIcons);
var buildData__default = /*#__PURE__*/_interopDefault(buildData);

// src/__scripts__/generateSlotMap.ts
path4__default.default.join(
  __dirname,
  "../../../utilities/src/utils/buildStaticData.json"
);
var testRoot = process.env.ULLD_TEST_ROOT;
var getSplitValue = (w) => {
  if (w.startsWith("[") && w.endsWith("]")) {
    return w.includes("...") ? "**" : "*";
  }
  return w;
};
var getCalculatedRoute = (p) => {
  let split = p.split("/").filter((w) => !["", "page.tsx", "src"].includes(w));
  if (split[0] !== "app") {
    throw new Error(
      `protected route does not appear to be within the app directory. Check ${p}`
    );
  }
  split = split.slice(1).map((w) => getSplitValue(w));
  return split.join("/");
};
var gatherProtectedPaths = (files2, propsExtendsMap) => {
  const protectedPaths = [];
  for (const k of files2) {
    const data = fs4__default.default.readFileSync(k, { encoding: "utf-8" });
    let re = /ULLD\:\s*protected-path/gm;
    const pageForRe = /pageFor:(?<slot>[\w]*)\/(?<subSlot>[\w]*)/gm;
    if (re.test(data)) {
      const shortenedPath = k.replace(testRoot, "");
      let pageFor = pageForRe.exec(data);
      let d = {
        filePath: shortenedPath,
        route: getCalculatedRoute(shortenedPath)
      };
      if (pageFor?.groups?.slot && pageFor?.groups?.subSlot) {
        d.pageFor = {
          slot: pageFor.groups.slot,
          subSlot: pageFor.groups.subSlot
        };
      }
      protectedPaths.push(d);
    }
  }
  propsExtendsMap.protectedPaths = protectedPaths;
  return propsExtendsMap;
};
var gatherReservedPublicPaths = (root = process.env.ULLD_TEST_ROOT) => {
  const publicDir = path4__default.default.join(root, "public");
  const paths = glob.globSync("*", {
    cwd: publicDir
  }).filter((p) => fs4__default.default.statSync(path4__default.default.join(publicDir, p)).isDirectory());
  return paths;
};
zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return fsUtils.withForwardSlash(a);
  }
  return a;
};
var defaultResultLengths = {
  categories: 12,
  equations: 10,
  snippets: 10,
  searchAll: 12
};
var iconNameField = zod.z.enum(allIcons__default.default);
var linkLocationSchema = zod.z.union([
  zod.z.literal("sidebar"),
  zod.z.literal("navbar"),
  zod.z.literal("both"),
  zod.z.literal("none")
]);
zod.z.object({
  navbarBreakpoint: zod.z.object({
    full: zod.z.number().default(1024).describe(
      "Pixel width at which the navbar will display all of it's contents."
    ),
    minimal: zod.z.number().default(640).describe(
      "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
    )
  }).default({
    full: 1024,
    minimal: 640
  }),
  maxResultLength: zod.z.object({
    categories: zod.z.number().default(defaultResultLengths.categories),
    equations: zod.z.number().default(defaultResultLengths.equations),
    snippets: zod.z.number().default(defaultResultLengths.snippets),
    searchAll: zod.z.number().default(defaultResultLengths.searchAll)
  }).describe(
    "The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts."
  ).default(defaultResultLengths),
  bookmarkLink: linkLocationSchema.optional().default("navbar"),
  syncLink: linkLocationSchema.optional().default("sidebar"),
  fileSystemToggle: linkLocationSchema.optional(),
  darkmodeToggle: linkLocationSchema.optional().default("sidebar"),
  settings: linkLocationSchema.optional(),
  equationsLink: linkLocationSchema.optional(),
  snippetsLink: linkLocationSchema.optional().default("sidebar"),
  backupData: linkLocationSchema.optional(),
  navbarLinks: zod.z.union([
    zod.z.string().describe("A document type id"),
    zod.z.object({
      label: zod.z.string(),
      icon: iconNameField.optional(),
      href: zod.z.string().optional(),
      onClick: zod.z.function().optional()
    })
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  ),
  // RESUME: Come back and figure out this TS error.
  sidebarLinks: zod.z.union([
    zod.z.object({
      icon: iconNameField,
      href: zod.z.string().optional(),
      label: zod.z.string().optional(),
      Icon: zod.z.function().optional(),
      onClick: zod.z.function().optional()
    }),
    zod.z.string().describe("The id of the document type.")
  ]).array().default([]).describe(
    "Either the document type id or the internalLink id to be to included in the navbar."
  )
}).default({});

// src/zod/documentConfigSchema.ts
var parsableSearchParam = zod.z.union([
  zod.z.string(),
  zod.z.string().array(),
  zod.z.number(),
  zod.z.number().array()
]);
var docTypeColorGroup = zod.z.object({
  bg: zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  ),
  fg: zod.z.string().optional().describe(
    "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
  )
});
var docTypeUISchema = zod.z.object({
  styles: zod.z.object({
    dark: docTypeColorGroup.default({}),
    light: docTypeColorGroup.default({})
    // combined_classes: z
    //     .string()
    //     .optional()
    //     .describe(
    //         "Css classes to be applied to elements related to this specific document type.",
    //     ),
  }).default({})
  // .transform((a) => {
  //     return {
  //         dark: a.dark,
  //         light: a.light,
  //         // combined_classes:
  //         //     a.combined_classes ||
  //         //     `${a.dark.bg || ""} ${a.dark.fg || ""} ${a.light.bg || ""} ${a.light.fg || ""}`,
  //     };
  // }),
}).default({});
var zodDocTypeInput = zod.z.string().transform(identity.makeValidIdOnlyLetters).brand("DocTypeName");
var documentTypeConfigSchemaBase = zod.z.object({
  id: zod.z.string().optional().describe("A unique key to be used internally to deal with this doctype."),
  docType: zodDocTypeInput.optional().describe(
    "A unique key which describes the nature of this document type: 'MathNote', 'Journal', 'References', etc..."
  ),
  filePathPattern: zod.z.string().optional().describe(
    "A glob style string to test a file path for this note type. Should return true if a given file is of this note type."
  ),
  matchWeight: zod.z.number().min(0).max(100).default(50).describe(
    "An extra weight between 0 and 100 to apply to matches. This can be very important when the location of one document type exists as a child of another, in which case an increased weight should be applied to the child document type. Default: 50"
  ),
  // contentType: documentConfigContentTypeSchema.default("mdx")
  fs: zod.z.string().describe(
    "The path to the root of the directory which holds this document type. This path must be both relative to the appConfig.fsRoot folder and a child of it. For example, a root directory at '/Users/steve/Desktop/notes' might have folders within it of /Users/steve/Desktop/notes/math and /Users/steve/Desktop/notes/physics. These appConfig.noteTypes[0].fs should be '/math' and the latter should be '/physics'."
  ).transform(fsUtils.withForwardSlash),
  url: zod.z.string().describe("The url at which this note should be displayed.").transform(zodWithForwardSlashTransform),
  urlQuery: zod.z.record(zod.z.string(), parsableSearchParam).optional().describe(
    "Url search paramters to be appended to generated buttons and links for this doc type in some cases. Useful for things like populating an initial list or opening with certain default override-able settings."
  ).default({}),
  keywords: zod.z.string().array().default([]).describe(
    "Keywords to help with search results and command sorting related to this document type."
  ),
  label: zod.z.string().describe(
    "The label to be used for this document type where automatically generated links, commands and buttons are referencing it."
  ),
  topicLabel: zod.z.string().optional().describe(
    "Replace references to the 'topic' tag with this label. This is useful for things like managing freelance work, where 'topics' might better be described as 'Jobs' or 'Clients'."
  ),
  subjectLabel: zod.z.string().optional().describe(
    "Replace references to the 'subject' tag with this label. This is useful for things like managing freelance work, where 'subjects' might better be described as 'Jobs' or 'Clients'."
  ),
  autoTag: zod.z.string().array().default([]).describe(
    "Automatically append these tags to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoTopic: zod.z.string().array().default([]).describe(
    "Automatically append these topics to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  autoSubject: zod.z.string().array().default([]).describe(
    "Automatically append these subjects to all notes of this document type. This can also be done interactively through the app's UI after it is built."
  ),
  UI: docTypeUISchema.default({}),
  icon: iconNameField.default("ulld"),
  inSidebar: zod.z.boolean().default(false),
  inNavbar: zod.z.boolean().default(false)
});
documentTypeConfigSchemaBase.partial({
  url: true
}).transform((a) => {
  const _id = identity.makeValidId(a.id || a.label);
  return {
    ...a,
    // docType: a.docType ||
    id: a.id || _id,
    url: a.url || `/${_id}`
  };
});
zod.z.union([
  zod.z.literal("bookmarks"),
  zod.z.literal("snippets")
]);
var internalDocumentTypeConfigSchema = documentTypeConfigSchemaBase.partial({
  fs: true
});
var internalDocumentTypes = [
  {
    "id": "bookmarks",
    "keywords": [
      "bookmarks"
    ],
    "url": "/bookmarks",
    "label": "Bookmarks",
    "docType": "bookmarks"
  },
  {
    "id": "settings",
    "keywords": [
      "settings"
    ],
    "url": "/settings",
    "label": "Settings",
    "docType": "none"
  },
  {
    "id": "pdfs",
    "keywords": [
      "pdf",
      "papers",
      "research"
    ],
    "url": "/pdf",
    "label": "Pdfs",
    "docType": "pdf-collection",
    "fs": "/resources/pdf"
  },
  {
    "id": "bibliography",
    "keywords": [
      "bib",
      "references",
      "citations"
    ],
    "url": "/bibliography",
    "label": "Bibliography",
    "docType": "bibliography"
  },
  {
    "id": "addSnippets",
    "url": "/snippets/add",
    "label": "Add Snippets",
    "docType": "none"
  },
  {
    "id": "snippets",
    "url": "/snippets",
    "label": "Snippets",
    "docType": "snippet"
  }
];

// src/__scripts__/getInternalDocumentTypes.ts
var getInternalDocumentTypes = () => {
  return internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes);
};
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
var writeTestStaticBuildData = (targetPath3 = process.env.ULLD_TEST_ROOT) => {
  let testData = {
    fsRoot: targetPath3
  };
  const target = path4__default.default.join(targetPath3, "ulldBuildData.json");
  const data = buildStaticDataSchema.parse(testData);
  fs4__default.default.writeFileSync(target, JSON.stringify(data, null, 4), {
    encoding: "utf-8"
  });
  console.log(`Wrote ulldBuildData.json to ${target}`);
};

// src/__scripts__/generateSlotMap.ts
var testRoot2 = process.env.ULLD_TEST_ROOT;
var buildDataPath = path4__default.default.join(__dirname, "../../../utilities/src/utils/buildStaticData.json");
var _propsExtendsMap = JSON.parse(fs4__default.default.readFileSync(buildDataPath, { encoding: "utf-8" }));
if (!testRoot2) {
  throw new Error(
    "ULLD_TEST_ROOT environment variable ws not present at run time in the generateSlotMap script."
  );
}
var targetDir = path4__default.default.join(testRoot2, "/src");
var mdxPath = path4__default.default.join(
  __dirname,
  "../../../../apps/website/content/embeddedDocs/developer/slotMap.txt"
);
var typePath = path4__default.default.join(__dirname, "../developer/slotMapType.ts");
var typeRootPath = path4__default.default.join(__dirname, "../developer/slotMapRootType.ts");
var zodSlotKeyPath = path4__default.default.join(__dirname, "../developer/slotKeySchema.ts");
var staticBuildDataPath = path4__default.default.join(
  __dirname,
  "../../../utilities/src/utils/buildStaticData.json"
);
var files = glob.globSync(`**/*.{tsx,ts}`, {
  ignore: "**/node_modules/**",
  cwd: targetDir
});
if (!fs4__default.default.existsSync(staticBuildDataPath)) {
  throw new Error(`staticBuildDataPath ${staticBuildDataPath} does not exist.`);
}
var items = [];
var staticBuildData = gatherProtectedPaths(files.map((f) => path4__default.default.join(targetDir, f)), _propsExtendsMap);
for (const k of files) {
  let content = fs4__default.default.readFileSync(path4__default.default.join(targetDir, k), { encoding: "utf-8" });
  let lineOne = content.split("\n")[0].trim();
  if (lineOne.startsWith("// Slot:")) {
    let words = lineOne.replace("// Slot: ", "").split(" ");
    let slots = words.find((w) => w.includes("/")).split("/").map((s) => s.trim());
    let type = words.find((w) => w.startsWith("type:"))?.replace("type:", "").trim() || "component";
    let propsExtends = words.find((w) => w.startsWith("propsExtends:"))?.replace("propsExtends:", "").trim();
    if (slots.length !== 2) {
      throw new Error(`Misformed slot string at ${k}`);
    }
    if (!types.slotTypes.includes(type)) {
      throw new Error(`No slotData type found for ${type}.`);
    }
    if (Boolean(
      // propsExtends && !(propsExtends in ((staticBuildData as any)?.propsExtendsMap as any)?.propsExtendsMap),
      propsExtends && !(propsExtends in staticBuildData?.propsExtendsMap)
    )) {
      staticBuildData.propsExtendsMap[propsExtends] = "FIX ME";
      console.warn(
        `Slot prop can not extend ${propsExtends}. It was is not included in the propsExtendsMap object. Added a temporary place holder.`
      );
    }
    const newItem = {
      path: k,
      parentSlot: slots[0],
      subSlot: slots[1],
      clientOnly: content.includes("clientOnly"),
      inReduxProvider: content.includes("inReduxProvider"),
      relativePath: `src/${k}`,
      type,
      propsExtends
    };
    let hasItem = items.find(
      (f) => Boolean(
        f.parentSlot === newItem.parentSlot && f.subSlot === newItem.subSlot
      )
    );
    if (hasItem) {
      throw new Error(`Found duplicate slots at:
parentSlot: ${hasItem.parentSlot}
subSlot: ${hasItem.subSlot}
path: ${hasItem.path}
----
parentSlot: ${newItem.parentSlot}
subSlot: ${newItem.subSlot}
path: ${newItem.path}
`);
    }
    items.push(newItem);
  }
}
var slotMap = {};
for (const k of items) {
  if (!slotMap[k.parentSlot]) {
    slotMap[k.parentSlot] = {};
  }
  slotMap[k.parentSlot][k.subSlot] = {
    path: `src/${k.path}`,
    clientOnly: k.clientOnly,
    inReduxProvider: k.inReduxProvider,
    type: k.type,
    propsExtends: k.propsExtends
  };
}
var targetPath2 = path4__default.default.join(
  __dirname,
  "../../../utilities/src/utils/slotMap.json"
);
var mdxSlotMap = `interface SlotMap {
`;
for (const k in slotMap) {
  mdxSlotMap += `    "${k}": {
`;
  for (const l in slotMap[k]) {
    mdxSlotMap += `        ${l}: string,
`;
  }
  mdxSlotMap += "    }, \n";
}
mdxSlotMap += "}";
var slotKeyContent = `
export const slotKeySchema = z.union([
`;
var slotSubKeys = {};
var subSlotsByKeys = {};
var addedParentSlots = [];
var makeValidSymbol = (val) => {
  return val.replaceAll("-", "_").replaceAll(" ", "_");
};
for (const k of items) {
  if (!addedParentSlots.includes(k.parentSlot)) {
    slotKeyContent += `    z.literal("${k.parentSlot}"),
`;
    addedParentSlots.push(k.parentSlot);
  }
  if (!(k.parentSlot in slotSubKeys)) {
    subSlotsByKeys[k.parentSlot] = [];
    let name = `${k.parentSlot}SubkeySchema`;
    slotSubKeys[k.parentSlot] = `
export const ${makeValidSymbol(name)} = z.union([
`;
  }
  if (k.subSlot) {
    subSlotsByKeys[k.parentSlot].push(k.subSlot);
    slotSubKeys[k.parentSlot] += `    z.literal("${k.subSlot}"),
`;
  }
}
slotKeyContent += "])";
for (const k in slotSubKeys) {
  if (subSlotsByKeys[k].length < 2) {
    let re = /z\.union\(\[[.|\n|\r|\w|\W]*z\.literal\("(?<content>[\w|\S|\s]*)"\)\,?/gm;
    let foundContent = re.exec(slotSubKeys[k]);
    if (!foundContent) {
      throw new Error(`No content was found for a slot with a single component, that can't be applied to a union of slot keys. Tried replacing ${k}.`);
    }
    slotSubKeys[k] = `${slotSubKeys[k].slice(0, slotSubKeys[k].indexOf("=") + 1)} z.literal("${foundContent[1]}")`;
  } else {
    slotSubKeys[k] += "])";
  }
}
var formatTypeSymbol = (k) => {
  return `${makeValidSymbol(stringUtils.capitalize(k))}SubSlots`;
};
var slotKeyFileContent = `
import { z } from 'zod';

${slotKeyContent}

${Object.values(slotSubKeys).join("\n\n")}

`;
fs4__default.default.writeFileSync(mdxPath, mdxSlotMap, { encoding: "utf-8" });
fs4__default.default.writeFileSync(
  typeRootPath,
  `export ${mdxSlotMap}
`,
  { encoding: "utf-8" }
);
fs4__default.default.writeFileSync(
  typePath,
  `import { SlotMap as SM } from "./slotMapRootType";

export type PluginSlotKey = keyof SM

${Object.keys(slotSubKeys).map(
    (k) => `export type ${formatTypeSymbol(k)} = keyof SM["${k}"]`
  ).join("\n\n")}

export type AnySubSlotKey = ${Object.keys(slotSubKeys).map((t) => formatTypeSymbol(t)).join(" | ")};
`,
  { encoding: "utf-8" }
);
fs4__default.default.writeFileSync(targetPath2, JSON.stringify(slotMap, null, 4), {
  encoding: "utf-8"
});
fs4__default.default.writeFileSync(zodSlotKeyPath, slotKeyFileContent, {
  encoding: "utf-8"
});
var reservedPublicDirs = gatherReservedPublicPaths();
staticBuildData.reservedPublicDirs = reservedPublicDirs;
staticBuildData.internalDocumentTypes = getInternalDocumentTypes();
fs4__default.default.writeFileSync(
  staticBuildDataPath,
  JSON.stringify(staticBuildData, null, 4),
  { encoding: "utf-8" }
);
writeTestStaticBuildData();
console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`);
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateSlotMap.cjs.map