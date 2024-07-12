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
// import * as t from "@fumadocs/content-collections/configuration"
// t.transformMDX
// import rehypeVideo from "rehype-video";
import { compileMDX as baseCompileMDX } from "@content-collections/mdx";
// import rehypeMathjax from "rehype-mathjax/chtml.js";
// import emoji from "remark-emoji";
import { Document, Context } from "@content-collections/core";
import remarkMath from "remark-math";
import * as rm from "remark-math";
import {
    remarkDocGen,
    remarkInstall,
    fileGenerator,
    typescriptGenerator,
} from "fumadocs-docgen";

console.log("remarkMath: ", rm);
import mdOpts from "@ulld/utilities/defaults/markdown.json" assert { type: "json" };
import rehypeMathJaxCHtml from "rehype-mathjax/chtml";

// async function compileMDX(document: any, context: any, options: any = {}) {
//     const { remarkPlugins = [], rehypePlugins = [], ...rest } = options;
//     return baseCompileMDX(context, document, {
//         ...rest,
//         remarkPlugins: [remarkGfm, remarkHeading, ...remarkPlugins],
//         rehypePlugins: [
//             ...rehypePlugins,
//         ],
//     });
// }

export const transformMDX = async (document: Document, context: Context) => {
    return context.cache(
        {
            type: "fumadocs",
            document,
        },
        async () => {
            let data: any = {};
            const body = await baseCompileMDX(
                {
                    ...context,
                    cache: async (input: any, fn: any) => fn(input),
                },
                document as any,
                {
                    cwd: process.cwd(),
                    remarkPlugins: [
                        remarkMath as any,
                        remarkGfm,
                        remarkHeading,
                        [
                            remarkInstall as any,
                            {
                                Tags: "InstallTabs",
                            },
                        ],
                        [
                            remarkDocGen,
                            {
                                generators: [fileGenerator(), typescriptGenerator()],
                            },
                        ],
                        remarkStructure,
                        () => {
                            return (_: any, file: { data: any; value: any }) => {
                                // console.log("file.value: ", file.value) // raw content
                                // if (file.includes("$$")) {
                                //   debugger;
                                // }
                                data = file.data;
                            };
                        },
                    ],
                    rehypePlugins: [
                        [rehypeMathJaxCHtml, mdOpts.math],
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
                    ],
                },
            );
            return {
                ...document,
                ...data,
                body,
            };
        },
    );
};
