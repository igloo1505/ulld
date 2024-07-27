import React from 'react'
/* import '../../styles/mdx.scss' */
/* import { MDXRemoteProps, compileMDX } from 'next-mdx-remote/rsc' */
/* import remarkMath from 'remark-math' */
/* import remarkGfm from "remark-gfm" */
/* import rehypeMathjax from 'rehype-mathjax/chtml' */
/* import rehypeAutolinkHeadings from "rehype-autolink-headings" */
/* import rehypePrettyCode from "rehype-pretty-code" */
/* import emoji from "remark-emoji" */
/* import rehypeSlug from "rehype-slug" */
/* import rehypeVideo from 'rehype-video'; */
/* // @ts-ignore */
/* import mdxMermaid from 'mdx-mermaid' */
/* import clsx from 'clsx' */
/* import { ImmediateNoteContentContainer } from './immediateNoteContainer' */
/* import { ClientsideNoteEvents } from "@ulld/state/state/domhandler" */
/* import { getComponentMap } from '@ulld/component-map/server' */
/* import { MdxCitations, zodCitationObject } from '../markdown/citations' */
/* import { SequentialNoteBottomBar } from '../markdown/sequentialBottomBar' */
/* import { CalendarAndDateManager } from '@ulld/api/classes/data/calendarAndDate' */
/* import { MdxNoteWithAll } from '@ulld/api/trpcTypes/main' */
/* import { DocTypes } from '@ulld/configschema/configUtilityTypes/docTypes' */
/* import { mathOptions } from '@ulld/utilities/defaults/markdownUniversalOptions' */
/* import { MdxNote, MdxNoteParseParams } from '@ulld/api/classes/prismaMdxRelations/mdxNote' */
/* import { getClassesFromFrontMatter } from '../../actions/universal/getClassesFromFrontMatter' */
/* import {  FrontMatterType } from '@ulld/types' */
/* import { AppConfigSchemaOutput } from '@ulld/configschema/types' */
/* import { readAppConfig } from '@ulld/developer/readAppConfig' */
/* import { AdditionalComponents } from '@ulld/component-map/types' */
/* import IndividualNoteContainer from './mdx/individualNoteContainer' */
/* import { MdxContentSERVER } from '@ulld/render/mdx/server' */


/* interface LazyMdxProps { */
/*     markdown?: string */
/*     returnedNote?: MdxNoteWithAll */
/*     docType: string | DocTypes */
/*     slug: string */
/*     fs: boolean */
/*     _config?: AppConfigSchemaOutput */
/*     rootRelativePath: string */
/*     mdxParser: MdxNoteParseParams */
/*     embeddableComponents: AdditionalComponents */
/*     method: "fs" | "database" */
/* } */


export const LazyMdx = async (p: any) => {
    /* if (!markdown && !returnedNote) { */
    /*     return null */
    /* } */
    /* const config = _config || await readAppConfig() */
    /* RESUME: Come back here and add the mdxParser function here. Make sure all props are being passed in correctly, and this should map through all provided parsers automatically. */
    /* TODO: Now that everything is being handled in a way that is more cohesive, merge the zod object being used inside of the fromMdxString method with the related trpc method that returns the object. Bind them as closely and as type safe as possible to make room for future changes. */
    /* let note = !markdown && returnedNote ? MdxNote.fromPrisma(returnedNote) : await MdxNote.fromMdxString({ raw: markdown as string, rootRelativePath: rootRelativePath }, { */
    /*     getBookmarkState: true */
    /* }, mdxParser) */

    /* const mdxProps: MDXRemoteProps = { */
    /*     source: note.formatted as string, */
    /*     options: { */
    /*         mdxOptions: { */
    /*             useDynamicImport: true, // Recently changed. If this breaks, this is your culprit. */
    /*             remarkPlugins: [ */
    /*                 remarkMath, */
    /*                 remarkGfm, */
    /*                 [emoji as any, {}], */
    /*                 /* [mdxMermaid, mermaidConfig], */
    /*             ], */
    /*             rehypePlugins: [ */
    /*                 /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
    /*                 [rehypeVideo as any, { */
    /*                     test: /\/(.*)(.mp4|.mov|.webm)$/, */
    /*                     details: false */
    /*                 }], */
    /*                 [rehypeMathjax, mathOptions], */
    /*                 [ */
    /*                     // @ts-ignore */
    /*                     rehypePrettyCode, */
    /*                     { */
    /*                         keepBackground: false, */
    /*                         theme: { */
    /*                             light: config.code.theme.light, */
    /*                             dark: config.code.theme.dark */
    /*                         }, */
    /*                         onVisitLine(node: any) { */
    /*                             if (node.children.length === 0) { */
    /*                                 node.children = [{ type: "text", value: " " }] */
    /*                             } */
    /*                         }, */
    /*                         onVisitHighlightedLine(node: any) { */
    /*                             node.properties.className.push("line--highlighted") */
    /*                         }, */
    /*                         onVisitHighlightedWord(node: any) { */
    /*                             node.properties.className = ["word--highlighted"] */
    /*                         }, */
    /*                     }, */
    /*                 ], */
    /*                 [ */
    /*                     rehypeAutolinkHeadings, */
    /*                     { */
    /*                         properties: { */
    /*                             className: ["subheading-anchor"], */
    /*                             ariaLabel: "Link to section", */
    /*                         }, */
    /*                     }, */
    /*                 ], */
    /*                 rehypeSlug, */
    /*                 /* toc */
    /*             ] */
    /*         }, */
    /*         parseFrontmatter: true */
    /*     }, */
    /*     components: getComponentMap(note.formatted || note.raw as string) || [] */
    /* } */

    /* const compiled = await compileMDX<FrontMatterType>(mdxProps) */


    /* note.sortCitationsByPageIndex() */

    return (
        <div>
            Lazily leaving this here for now. Moved this component over to separate filesystem and database equivalent components, and most importantly, moved away from next-mdx-remote.
        </div>
    )
}


/* LazyMdx.displayName = "LazyMdx" */
