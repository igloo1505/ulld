import React from 'react'
import '../../styles/mdx.scss'
import { MDXRemoteProps, compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import remarkGfm from "remark-gfm"
import rehypeMathjax from 'rehype-mathjax/chtml'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import emoji from "remark-emoji"
import rehypeSlug from "rehype-slug"
import rehypeVideo from 'rehype-video';
/* // @ts-ignore */
/* import mdxMermaid from 'mdx-mermaid' */
import clsx from 'clsx'
import { ImmediateNoteContentContainer } from './immediateNoteContainer'
import {ClientsideDomEventsProps, ClientsideNoteEvents } from "@ulld/state/state/domhandler"
import { getComponentMap } from '../markdown/componentMap'
import { MdxCitations, zodCitationObject } from '../markdown/citations'
import { SequentialNoteBottomBar } from '../markdown/sequentialBottomBar'
import { CalendarAndDateManager } from '@ulld/api/classes/data/calendarAndDate'
import { MdxNoteWithAll } from '@ulld/api/trpcTypes/main'
import { DocTypes } from '@ulld/configschema/configUtilityTypes/docTypes'
import { ParsedAppConfig } from '@ulld/configschema/types'
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { FrontMatterType } from '@ulld/state/classes/frontMatter/zodFrontMatterObject'
import { mathOptions } from '@ulld/utilities/defaults/markdownUniversalOptions'
import { MdxNote } from '@ulld/api/classes/prismaMdxRelations/mdxNote'
import { getClassesFromFrontMatter } from '../../actions/universal/getClassesFromFrontMatter'


interface LazyMdxProps {
    markdown?: string
    returnedNote?: MdxNoteWithAll
    docType: DocTypes
    slug: string
    fs: boolean
    _config?: ParsedAppConfig
}


export const LazyMdx = async ({ markdown, fs, returnedNote, slug, docType, _config }: LazyMdxProps) => {
    if (!markdown && !returnedNote) {
        return null
    }
    const config = _config || getInternalConfig()
    let note = !markdown && returnedNote ? MdxNote.fromPrisma(returnedNote) : await MdxNote.fromMdxString({ content: markdown as string, urlSlug: slug, docType, getBookmarkState: true })
    const mdxProps: MDXRemoteProps = {
        source: note.formatted as string,
        options: {
            mdxOptions: {
                useDynamicImport: true, // Recently changed. If this breaks, this is your culprit.
                remarkPlugins: [
                    remarkMath,
                    remarkGfm,
                    [emoji as any, {}],
                    /* [mdxMermaid, mermaidConfig], */
                ],
                rehypePlugins: [
                    /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
                    [rehypeVideo as any, {
                        test: /\/(.*)(.mp4|.mov|.webm)$/,
                        details: false
                    }],
                    [rehypeMathjax, mathOptions],
                    [
                        // @ts-ignore
                        rehypePrettyCode,
                        {
                            keepBackground: false,
                            theme: {
                                light: config.code.theme.light,
                                dark: config.code.theme.dark
                            },
                            onVisitLine(node: any) {
                                if (node.children.length === 0) {
                                    node.children = [{ type: "text", value: " " }]
                                }
                            },
                            onVisitHighlightedLine(node: any) {
                                node.properties.className.push("line--highlighted")
                            },
                            onVisitHighlightedWord(node: any) {
                                node.properties.className = ["word--highlighted"]
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
                    /* toc */
                ]
            },
            parseFrontmatter: true
        },
        components: getComponentMap(note.formatted || note.raw)
    }


    const compiled = await compileMDX<FrontMatterType>(mdxProps)


    note.sortCitationsByPageIndex()

    return (
        <div
            className={clsx("mdx relative group/mdxNote", getClassesFromFrontMatter(note.frontMatter), note.floatImages && "floatImages")}
            id="noteContainer"
        >
            {note.firstSync && <div className={"w-fit absolute top-0 right-0 text-sm text-gray-700 dark:text-gray-400 text-right"}>{CalendarAndDateManager.formatDate(note.firstSync)}</div>}
            <ImmediateNoteContentContainer>
                {compiled.content}
            </ImmediateNoteContentContainer>
            <ClientsideNoteEvents
                bookmarked={note.bookmarked || false}
                noteId={returnedNote?.id}
                noteQuickLinkId={note.quickLinkId}
                fs={fs}
            />
            <MdxCitations citations={note.citations ? zodCitationObject.array().parse(note.citations) : []} />
            <SequentialNoteBottomBar
                sequentialIndex={note.sequentialIndex}
                sequentialId={note.sequentialKey}
            />
        </div>
    )
}


/* LazyMdx.displayName = "LazyMdx" */
