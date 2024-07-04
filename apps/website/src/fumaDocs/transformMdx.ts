import {
  rehypeCode,
  rehypeCodeDefaultOptions,
  remarkGfm,
  remarkHeading,
  remarkStructure,
} from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";
import {
  transformerMetaHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import rehypeImgSize from "rehype-img-size";
// import rehypeVideo from "rehype-video";
import { compileMDX } from "@content-collections/mdx";
// import rehypeMathjax from "rehype-mathjax/chtml.js";
// import emoji from "remark-emoji";
import { Document, Context } from "@content-collections/core";
import remarkMath from "remark-math";
import {
  remarkDocGen,
  remarkInstall,
  fileGenerator,
  // typescriptGenerator,
} from "fumadocs-docgen";
import mdOpts from "@ulld/utilities/defaults/markdown.json" assert { type: "json" };
import rehypeMathJaxCHtml from "rehype-mathjax/chtml";

const { math } = mdOpts;

// const extraRemarkPlugins = [
// [remarkInstall as any, { Tags: "InstallTabs" }],
// [
//   remarkHeadingId,
//   {
//     defaults: true,
//   },
// ],
// [emoji as any, {}],
// [
//   remarkDocGen as any,
//   { generators: [fileGenerator(), typescriptGenerator()] },
// ],
// ];

// const extraRehypePlugins = [
// [
//   rehypeVideo as any,
//   {
//     test: /\/(.*)(.mp4|.mov|.webm)$/,
//     details: false,
//   },
// ],
// rehypeSlug,
// ];

export const transformMDX = async (document: Document, context: Context) => {
  let data: { toc: any; structuredData: any } = {} as {
    toc: any;
    structuredData: any;
  };
  const body = await compileMDX(context, document as any, {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkHeading,
      [remarkInstall as any, { Tags: "InstallTabs" }],
      [remarkDocGen, { generators: [fileGenerator(), remarkInstall()] }],
      remarkStructure,
      () => {
        return (_, file) => {
          // if (file.includes("$$")) {
          //   debugger;
          // }
          data = file.data as any;
        };
      },
    ],
    rehypePlugins: [
      [
        rehypeCode,
        {
          defaultLanguage: "tsx",
          transformers: [
            ...(rehypeCodeDefaultOptions.transformers as any[]),
            transformerTwoslash(),
            transformerNotationWordHighlight(),
            transformerMetaHighlight(),
          ],
          themes: {
            light: "github-light",
            dark: "aurora-x",
          },
        },
      ],
      [rehypeImgSize, { dir: "./public" }],
      [rehypeMathJaxCHtml, math],
    ],
  });
  return {
    ...document,
    toc: data.toc,
    structuredData: data.structuredData,
    body,
  };
};
