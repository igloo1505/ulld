import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeMathjax from "rehype-mathjax/chtml.js";
import rehypePrettyCode from "rehype-pretty-code";
import emoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import fs from "fs";

const markdownOptions = fs.readFileSync(
    "../../packages/utilities/src/defaults/markdownOptions.json",
    {
        encoding: "utf-8",
    },
);
const { math } = markdownOptions
    ? JSON.parse(markdownOptions)
    : { math: {}};

const contentRoot = "./src/mdx";

export const PrivacyPolicy = defineDocumentType(() => ({
    name: "PrivacyPolicy",
    filePathPattern: `legal/privacyPolicy.mdx`,
    fields: {
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
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
        title: { type: "string", required: false },
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
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
    contentType: "mdx",
}));

export const MyNotes = defineDocumentType(() => ({
    name: "MyNotes",
    filePathPattern: `myNotes/**.mdx`,
    fields: {
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
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
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
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
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
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
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
    contentType: "mdx",
}));

export const Documentation = defineDocumentType(() => ({
    name: "Documentation",
    filePathPattern: `docs/**/*.mdx`,
    fields: {
        title: { type: "string", required: false },
        lastUpdated: { type: "date", required: false },
        category: { type: "list", of: {type: "string"}, required: true },
        id: {type: "string", required: false},
        keywords: {
            type: "list",
            of: {type: "string"}
        }
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
        title: {
            type: "string",
            required: true,
        },
        updated: {
            type: "date",
            required: false,
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
        // description: {
        //     type: "string",
        //     required: true
        // },
        id: {
            type: "string",
            required: true
        },
        sequential: {
            type: "number"
        },
        sequentialId: {
            type: "string"
        }
    },
    contentType: "mdx",
}));


export const Blog = defineDocumentType(() => ({
    name: "BlogPost",
    filePathPattern: `blog/**/*.mdx`,
    fields: {
        title: {
            type: "string",
            required: true,
        },
        updated: {
            type: "date",
            required: false,
        },
        featured: {
            type: "boolean",
            required: false,
        },
        created: {
            type: "date",
            required: true,
        },
        author: {
            type: "string",
            required: false
        },
        tags: {
            type: "list",
            of: {
                type: "string",
            },
        },
        images: {
            type: "list",
            of: {
                type: "string",
            },
        },
        featuredEquation: {
type: "string",
            required: false
        },
        description: {
            type: "string",
            required: true
        },
        id: {
            type: "string",
        },
    },
    contentType: "mdx",
}));

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
        CancelSubscriptionPrompt,
        Blog,
        Demos
    ],
    mdx: {
        remarkPlugins: [remarkMath, remarkGfm, [emoji as any, {}]],
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
                    theme: {
                        light: "material-theme-lighter",
                        dark: "dracula",
                    },
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
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
            rehypeSlug,
        ],
    },
});
