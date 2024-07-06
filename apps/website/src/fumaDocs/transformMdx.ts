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
import { compileMDX as baseCompileMDX } from "@content-collections/mdx";
// import rehypeMathjax from "rehype-mathjax/chtml.js";
// import emoji from "remark-emoji";
import { Document, Context } from "@content-collections/core";
import remarkMath from "remark-math";
import {
    remarkDocGen,
    remarkInstall,
    fileGenerator,
    typescriptGenerator,
} from "fumadocs-docgen";
import mdOpts from "@ulld/utilities/defaults/markdown.json" assert { type: "json" };
import rehypeMathJaxCHtml from "rehype-mathjax/chtml";

const { math: mathOptions } = mdOpts;


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

async function compileMDX(document: any, context: any, options: any = {}) {
    const { remarkPlugins = [], rehypePlugins = [], ...rest } = options;
    return baseCompileMDX(context, document, {
        ...rest,
        remarkPlugins: [remarkGfm, remarkHeading, ...remarkPlugins],
        rehypePlugins: [
            rehypeCode,
            [rehypeImgSize, { dir: "./public" }],
            ...rehypePlugins,
        ],
    });
}

export const transformMDX = async (document: Document, context: Context) => {
    let data: { toc: any; structuredData: any } = {} as {
        toc: any;
        structuredData: any;
    };
    return context.cache(
        {
            type: "fumadocs",
            document,
        },
        async () => {
            const body = await compileMDX(
                document,
                {
                    ...context,
                    cache: async (input: any, fn: any) => fn(input),
                },
                {
                    remarkPlugins: [
                        remarkMath as any,
                        remarkGfm,
                        remarkHeading,
                        [remarkInstall as any, { Tags: "InstallTabs" }],
                        [
                            remarkDocGen,
                            { generators: [
                                fileGenerator(), 
                                typescriptGenerator()
                            ] },
                        ],
                        remarkStructure,
                        () => {
                            return (_: any, file: { data: any }) => {
                                // if (file.includes("$$")) {
                                //   debugger;
                                // }
                                data = file.data as any;
                            };
                        },
                    ],
                    rehypePlugins: [
                        [rehypeMathJaxCHtml as any, mathOptions],
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
                toc: data.toc,
                structuredData: data.structuredData,
                body,
            };
        },
    );
};
