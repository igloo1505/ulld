// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import {
  defineDocumentType,
  makeSource,
  DocumentTypeDef,
} from "contentlayer/source-files";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax/chtml";
import emoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";
import remarkHeadingId from "remark-custom-header-id";
import fs from "fs";
import {
  transformerMetaHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
// import {
//   defaultConfig,
//   createConfig,
//   Options,
// } from "fumadocs-contentlayer/configuration";
import {
  remarkDocGen,
  remarkInstall,
  fileGenerator,
  typescriptGenerator,
} from "fumadocs-docgen";
import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { ShikiTransformer } from "shiki";

const styleFields: DocumentTypeDef["fields"] = {
  autoWrapCode: {
    type: "boolean",
    default: false,
  },
  removeColumns: {
    type: "list",
    of: {
      type: "string",
    },
  },
};

const baseFields: DocumentTypeDef["fields"] = {
  id: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  created: {
    type: "date",
    required: true,
  },
  tags: {
    type: "list",
    of: {
      type: "string",
    },
  },
  keywords: {
    type: "list",
    of: { type: "string" },
  },
  updated: {
    type: "date",
    required: false,
  },
  blog: {
    type: "boolean",
    default: false,
  },
  images: {
    type: "list",
    of: {
      type: "string",
    },
  },
  icon: {
    type: "string",
    required: false,
  },
  featuredEquation: {
    type: "string",
    required: false,
  },
  priority: {
    type: "number",
    required: false,
  },
};

const markdownOptions = fs.readFileSync(
  "../../packages/utilities/src/defaults/markdownOptions.json",
  {
    encoding: "utf-8",
  },
);
const { math } = markdownOptions ? JSON.parse(markdownOptions) : { math: {} };

const contentRoot = "./content";

export const PrivacyPolicy = defineDocumentType(() => ({
  name: "PrivacyPolicy",
  filePathPattern: `legal/privacyPolicy.mdx`,
  fields: {
    id: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    updated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const AboutUs = defineDocumentType(() => ({
  name: "AboutUs",
  filePathPattern: `brand/aboutUs.mdx`,
  fields: {
    ...baseFields,
    lastUpdated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const StoryOfULLD = defineDocumentType(() => ({
  name: "StoryOfULLD",
  filePathPattern: `brand/storyOfUlld.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    lastUpdated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const MyNotes = defineDocumentType(() => ({
  name: "MyNotes",
  filePathPattern: `myNotes/**/*.mdx`,
  fields: {
    ...baseFields,
    lastUpdated: { type: "date", required: false },
    sequential: {
      type: "number",
    },
    sequentialId: {
      type: "string",
    },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const Tos = defineDocumentType(() => ({
  name: "TermsOfService",
  filePathPattern: `legal/termsOfService.mdx`,
  fields: {
    id: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    updated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const CancelSubscriptionPrompt = defineDocumentType(() => ({
  name: "CancelSubscriptionPrompt",
  filePathPattern: `legal/cancelSubscriptionPrompt.mdx`,
  fields: {
    id: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    updated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const RefundPolicy = defineDocumentType(() => ({
  name: "RefundPolicy",
  filePathPattern: `legal/refundPolicy.mdx`,
  fields: {
    id: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    updated: { type: "date", required: false },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

const docsProps: DocumentTypeDef = {
  name: "Documentation",
  filePathPattern: `docs/**/*.mdx`,
  fields: {
    ...styleFields,
    id: {
      type: "string",
      // required: true,
    },
    created: {
      type: "date",
      // required: false,
    },
    title: {
      type: "string",
      required: false,
    },
    description: {
      type: "string",
      required: false,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    updated: {
      type: "date",
      required: false,
    },
    keywords: {
      type: "list",
      of: { type: "string" },
    },
    aliases: {
      type: "list",
      of: { type: "string" },
    },
    category: {
      type: "string",
      // required: true,
    },
    component: {
      type: "string",
      // required: true,
    },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
};

export const Documentation = defineDocumentType(() => docsProps);

export const SlotDocumentation = defineDocumentType(() => ({
  name: "SlotDocs",
  filePathPattern: `slotDocs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...docsProps.fields,
    slot: {
      type: "string",
      required: true,
    },
    subSlot: {
      type: "string",
      required: false,
    },
  },
  computedFields: {},
}));

export const StaticDocumentation = defineDocumentType(() => ({
  name: "StaticDocs",
  filePathPattern: `docsStatic/**/*.mdx`,
  fields: {
    ...styleFields,
    id: {
      type: "string",
      required: true,
    },
    created: {
      type: "date",
      required: true,
    },
    updated: {
      type: "date",
      required: false,
    },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const Demos = defineDocumentType(() => ({
  name: "Demo",
  filePathPattern: `demos/**/*.mdx`,
  fields: {
    id: {
      type: "string",
      required: true,
    },
    created: baseFields.created,
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
  contentType: "mdx",
}));

export const Blog = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    ...baseFields,
    blog: {
      type: "boolean",
      default: true,
    },
    featured: {
      type: "boolean",
      required: false,
    },
    author: {
      type: "string",
      required: false,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    description: {
      type: "string",
      required: true,
    },
  },
  contentType: "mdx",
}));

const fumaOptions: Options = {
  // ...defaultConfig,
  imgDirPath: "./public/assets/images",
  docFields: {
    ...styleFields,
    id: {
      type: "string",
      // required: true,
    },
    created: {
      type: "date",
      required: false,
    },
    description: {
      type: "string",
      required: false,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    updated: {
      type: "date",
      required: false,
    },
    keywords: {
      type: "list",
      of: { type: "string" },
    },
    alias: {
      type: "list",
      of: { type: "string" },
    },
    category: {
      type: "string",
      // required: true,
    },
    component: {
      type: "string",
      // required: true,
    },
  },
    metaFields: {
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    },
  codeOptions: {
    defaultLanguage: "tsx",
    transformers: [
      ...(rehypeCodeDefaultOptions.transformers as ShikiTransformer[]),
      transformerTwoslash(),
      transformerNotationWordHighlight(),
      transformerMetaHighlight(),
    ],
    themes: {
      light: "github-light",
      dark: "aurora-x",
    },
  },
  mdx: {
    // lastModifiedTime: "git", // apparently not part of object when using content layer? Address this later if needed.
    remarkPlugins: [
      remarkMath as any,
      [remarkInstall as any, { Tags: "InstallTabs" }],
      [
        remarkHeadingId,
        {
          defaults: true,
        },
      ],
      [emoji as any, {}],
      [
        remarkDocGen as any,
        { generators: [fileGenerator(), typescriptGenerator()] },
      ],
    ],
    rehypePlugins: [
      // [rehypeMermaid as any, mermaid],
      [
        rehypeVideo as any,
        {
          test: /\/(.*)(.mp4|.mov|.webm)$/,
          details: false,
        },
      ],
      [rehypeMathjax, math],
      rehypeSlug,
    ],
  },
};

// const fumaBaseConfig = createConfig(fumaOptions);
// console.log("fumaBaseConfig: ", fumaBaseConfig)
// export default makeSource(defaultConfig);

// export default makeSource(fumaBaseConfig);

export default makeSource({
  contentDirPath: contentRoot,
  documentTypes: [
    PrivacyPolicy,
    Tos,
    RefundPolicy,
    AboutUs,
    MyNotes,
    StoryOfULLD,
    Documentation,
    SlotDocumentation,
    CancelSubscriptionPrompt,
    Blog,
    Demos,
    StaticDocumentation,
  ],
  mdx: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      [
        remarkHeadingId,
        {
          defaults: true,
        },
      ],
      [emoji as any, {}],
    ],
    rehypePlugins: [
      // [rehypeMermaid as any, mermaid],
      [
        rehypeVideo as any,
        {
          test: /\/(.*)(.mp4|.mov|.webm)$/,
          details: false,
        },
      ],
      [rehypeMathjax, math],
      [
        /* @ts-ignore */
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: "dracula",
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
          transformers: [
            transformerNotationWordHighlight(),
            transformerMetaHighlight(),
          ],
        },
      ],
      // [
      //     rehypeAutolinkHeadings,
      //     {
      //         properties: {
      //             className: ["subheading-anchor"],
      //             ariaLabel: "Link to section",
      //         },
      //     },
      // ],
      rehypeSlug,
    ],
  },
});
