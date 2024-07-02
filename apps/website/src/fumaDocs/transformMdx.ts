import fs from 'fs'
import {
  rehypeCode,
  remarkGfm,
  remarkHeading,
  remarkStructure
} from "fumadocs-core/mdx-plugins";
// import rehypeVideo from "rehype-video";
import {
  transformerMetaHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import rehypeImgSize from "rehype-img-size";
// import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { ShikiTransformer } from "shiki";
import {
  compileMDX
} from "@content-collections/mdx";
import rehypeMathjax from "rehype-mathjax/chtml.js";
// import emoji from "remark-emoji";
import { Document, Context } from '@content-collections/core';
import remarkMath from "remark-math";
// import {
//   remarkDocGen,
//   remarkInstall,
//   fileGenerator,
//   typescriptGenerator,
// } from "fumadocs-docgen";

const markdownOptions = fs.readFileSync(
  "../../../../packages/utilities/src/defaults/markdownOptions.json",
  {
    encoding: "utf-8",
  },
);

console.log("markdownOptions: ", markdownOptions)
const { math } = markdownOptions ? JSON.parse(markdownOptions) : { math: {} };

const extraRemarkPlugins = [
      remarkMath as any,
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
]


const extraRehypePlugins = [
      // [
      //   rehypeVideo as any,
      //   {
      //     test: /\/(.*)(.mp4|.mov|.webm)$/,
      //     details: false,
      //   },
      // ],
      [rehypeMathjax, math],
      // rehypeSlug,
]

export const transformMDX = async (document: Document, context: Context) => {      
  let data: {toc: any, structuredData: any} = {} as {toc: any, structuredData: any}
  const body = await compileMDX(context, document as any, {
    remarkPlugins: [
      remarkGfm,
      remarkHeading,
      ...extraRemarkPlugins as any,
      remarkStructure,
      () => {
        return (_, file) => {
          data = file.data as any;
        };
      }
    ],
    rehypePlugins: [
      rehypeCode,
      [rehypeImgSize, { dir: "./public" }],
      ...extraRehypePlugins as any
    ]
  });
  return {
    ...document,
    toc: data.toc,
    structuredData: data.structuredData,
    body
  };
}
