// const walkTokens = (token) => {
//     console.log("token: ", token)
//   if (token.type === 'heading') {
//     token.depth += 1;
//   }
// };

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    $schema: "https://typedoc.org/schema.json",
    name: "Embeddable Components",
    tsconfig: "./tsconfig.docs.json",
    out: "./docs/output",
    useTsLinkResolution: true,
    options: {},
    // commentStyle: "block",
    cleanOutputDir: true,
    entryPoints: [
        // "./src/**/*.tsx",
        "./src/academic/error.tsx",
        "./src/academic/abstract.tsx",
        "./src/emeddedComponents/CLIENT_COMPONENTS/card/props.tsx",
        "./src/emeddedComponents/gridProps.ts",
        "./src/emeddedComponents/tabs/props.ts",
        "./src/emeddedComponents/media/videoProps.ts",
        "./src/emeddedComponents/modelView/props.tsx",
        "./src/emeddedComponents/text/titleProps.ts",
        "./src/emeddedComponents/props/withTooltipWrapperProps.ts",
        "./src/emeddedComponents/layout/vspaceProps.ts",
        "./src/emeddedComponents/props/underlineProps.ts",
        "./src/emeddedComponents/text/smallProps.ts",
        "./src/emeddedComponents/text/centeredTextProps.ts",
        "./src/emeddedComponents/text/largeProps.ts",
        "./src/emeddedComponents/text/leadProps.ts",
        "./src/emeddedComponents/text/quoteProps.ts",
        "./src/utility/equationRefProps.ts",
        "./src/emeddedComponents/HlProps.ts",
        "../utilities/src/types/admonition.ts",
        "../utilities/src/types/embeddedImageProps.ts",
        "../configschema/src/developer/typedocInput.ts",
        "../configschema/src/developer/typedoc/componentConfigSchema.ts",
        "../configschema/src/developer/typedoc/embeddableConfigSchema.ts"
        // "./src/emeddedComponents/props/propcolor.ts"
    ],
    entryPointStrategy: "Expand",
    excludeExternals: true,
    exclude: ["@ulld/database", "prisma", ".changeset"],
    fileExtension: ".mdx",
    sort: ["source-order"],
    // media: "media",
    readme: "./README.md",
    // basePath: "/docs/user/components",
    // mergeReadme: true,
    publicPath: "/",
    expandObjects: true,
    expandParameters: true,
    parametersFormat: "table", // "table" | "list"
    propertiesFormat: "table", // "table" | "list"
    enumMembersFormat: "list", // "table" | "list"
    useCodeBlocks: true,
    outputFileStrategy: "modules",
    hidePageHeader: true,
    hidePageTitle: true,
    hideBreadcrumbs: true,
    visibilityFilters: {},
    navigationModel: {
        excludeGroups: true,
        excludeCategories: true,
        excludeFolders: true,
    },
    // categorizeByGroup: false,
    // searchCategoryBoosts: {
    //     Component: 2,
    //     Model: 1.2,
    // },
    // searchGroupBoosts: {
    //     Classes: 1.5,
    // },
    // navigationLinks: {
    //     Docs: "https://typedoc.org/guides/overview",
    //     GitHub: "https://github.com/TypeStrong/typedoc",
    // },
    // sidebarLinks: {
    //     API: "https://typedoc.org/api",
    // },
    plugin: [
        "typedoc-plugin-remark",
        "typedoc-github-wiki-theme",
        "typedoc-plugin-coverage",
        "typedoc-plugin-mdn-links",
        "typedoc-plugin-rename-defaults",
        "typedoc-plugin-markdown",
        "typedoc-plugin-missing-exports",
        "typedoc-plugin-zod",
        "typedoc-plugin-include-example",
        // "@droppedcode/typedoc-plugin-relative-includes",
        "typedoc-plugin-frontmatter",
        // "../../typedoc/navigation.cjs",
        // "../../typedoc/customFrontMatter.cjs"
    ],
    remarkPlugins: [
        "unified-prettier",
        // ["remark-link-rewrite", {
        //     replacer: (currentUrl) => console.log("currentUrl: ", currentUrl)
        // }]
    ],
    tableColumnSettings: {
        hideDefaults: true,
        hideInherited: false,
        hideModifiers: true,
        hideOverrides: false,
        hideSources: true,
        hideValues: true,
        leftAlignHeaders: false,
    },
    // markdownItLoader: {}
    // markedOptions: {
    // walkTokens
    // },
    // includes: ["typedocIncludes"],
};
