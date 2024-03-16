import clsx from 'clsx'
import "@ulld/tailwind/defaultStyles"
import "./styles.scss"
import type { Metadata, Route } from 'next'
import { cookies } from 'next/headers'
import { AppConfigSchemaInput, getInternalConfig } from '@ulld/configschema'
import { prisma } from '@ulld/database'
import React from 'react'
import { settingSchema } from "@ulld/parsers"
import { RequireJsLoader } from "@ulld/utilities/loaders"
import { StateWrappedUI } from "@ulld/state/wrappers"
import { Toaster } from "@ulld/tailwind/base/toaster"
import { fontSans } from "@ulld/tailwind/defaultFont"
import { writeConfigJson } from "@ulld/configschema/writeConfig"


const lazyTestConfig: AppConfigSchemaInput = {
    fsRoot: "/Users/bigsexy/Desktop/notes/content",
    terminal: {
        logLevel: "debug",
    },
    database: {
        removeIfNotPresentInFs: true
    },
    autoTag: [
        {
            path: '/journal/dreams/**{.mdx,.md,.ipynb}',
            tag: "dreamLog"
        },
        {
            path: '/references/howto/**{.mdx,.md,.ipynb}',
            tag: "howTo"
        },
        {
            path: '/references/howto/git/**{.mdx,.md,.ipynb}',
            tag: "git"
        },
    ],
    autoTopic: [
        {
            path: '/tech/work/safeStub/**{.mdx,.md,.ipynb}',
            topic: "SafeStub"
        },
        {
            path: '/tech/work/lawyerVid/**{.mdx,.md,.ipynb}',
            topic: "LawyerVid"
        },
    ],
    autoSubject: [
        {
            path: '/math/differentialEquations/**{.mdx,.md,.ipynb}',
            subject: "Differential Equations"
        },
        {
            path: '/math/linearAlgebra/**{.mdx,.md,.ipynb}',
            subject: "Linear Algebra"
        },
        {
            path: '/math/calculus/1/**{.mdx,.md,.ipynb}',
            subject: "Calc 1"
        },
        {
            path: '/math/calculus/2/**{.mdx,.md,.ipynb}',
            subject: "Calc 2"
        },
        {
            path: '/math/calculus/3/**{.mdx,.md,.ipynb}',
            subject: "Calc 3"
        },
        {
            path: '/math/calculus/multivariable/**{.mdx,.md,.ipynb}',
            subject: "Multi-variable calculus"
        },
    ],
    noteTypes: [
        {
            "docType": "Doc",
            "filePathPattern": "docs/**/*.mdx",
            "fs": "/docs",
            "url": "/docs" as Route,
            "id": "docs",
            "keywords": [
                "docs"
            ],
            "label": "Docs"
        },
        {
            "docType": "Reference",
            "filePathPattern": "references/**/*.mdx",
            "fs": "/references",
            "url": "/references" as Route,
            "id": "references",
            "keywords": [
                "references"
            ],
            "label": "References"
        },
        {
            "docType": "HealthNote",
            "filePathPattern": "health/**/*.mdx",
            "fs": "/health",
            "url": "/health" as Route,
            "id": "health",
            "keywords": [
                "health"
            ],
            "label": "Health"
        },
        {
            "docType": "Cheatsheet",
            "filePathPattern": "cheatsheets/**/*.mdx",
            "fs": "/cheatsheets",
            "url": "/cheatsheets" as Route,
            "id": "cheatsheets",
            "keywords": [
                "cheatsheets"
            ],
            "label": "Cheatsheets"
        },
        {
            "docType": "Guide",
            "filePathPattern": "guides/**/*.mdx",
            "fs": "/guides",
            "url": "/guides" as Route,
            "id": "quides",
            "keywords": [
                "guides"
            ],
            "label": "Guides"
        },
        {
            "docType": "TechNote",
            "id": "techNote",
            "filePathPattern": "tech/**/*.mdx",
            "fs": "/tech",
            "url": "/tech" as Route,
            label: "Tech",
            topicLabel: "Projects"
        },
        {
            "docType": "MathNote",
            "filePathPattern": "math/**/*.mdx",
            "fs": "math",
            "url": "/math" as Route,
            "id": "math",
            "keywords": [
                "math"
            ],
            "label": "Math"
        },
        {
            "docType": "QuickNote",
            "filePathPattern": "quickNotes/**/*.mdx",
            "fs": "quickNotes",
            "url": "/quickNotes" as Route,
            "id": "quicknotes",
            "keywords": [
                "quickNotes",
                "qn"
            ],
            "label": "Quick Notes"
        },
        {
            "docType": "PhysicsNote",
            "filePathPattern": "physics/**/*.mdx",
            "fs": "/physics",
            "url": "/physics" as Route,
            "id": "physics",
            "keywords": [
                "physics",
                "research"
            ],
            "label": "Physics"
        },
        {
            "docType": "PhysicsData",
            "filePathPattern": "physicsData/**/*.mdx",
            "fs": "/physicsData",
            "url": "/physics/data" as Route,
            "id": "physicsData",
            "keywords": [
                "physics",
                "Data",
                "research",
                "tabular"
            ],
            "label": "Physics Data"
        },
        {
            "docType": "QuickThought",
            "filePathPattern": "quickThoughts/**/*.mdx",
            "fs": "/quickThoughts",
            "url": "/quickThoughts" as Route,
            "id": "quickthoughts",
            "keywords": [
                "quick",
                "thoughts"
            ],
            "label": "Quick Thoughts"
        },
        {
            "docType": "Recipe",
            "filePathPattern": "recipes/**/*.mdx",
            "fs": "/recipes",
            "url": "/recipes" as Route,
            "id": "recipes",
            "keywords": [
                "recipes",
                "cooking"
            ],
            "label": "Recipes"
        },
        {
            "docType": "JournalEntry",
            "filePathPattern": "journal/**/*.mdx",
            "fs": "/journal",
            "url": "/journal" as Route,
            "id": "journal",
            "keywords": [
                "journal",
                "personal"
            ],
            "label": "Journal"
        },
        {
            "docType": "Dreams",
            "id": "dreams",
            "url": "/journal/dreams" as Route,
            "filePathPattern": "journal/dreams/**/*.mdx",
            urlQuery: { tags: "dream" },
            "label": "Dreams",
            "fs": "/journal/dreams",
            autoTag: ["dreamLog"],
            matchWeight: 51
        },
    ],
    bibPath: "/bib/citations.bib",
    cslPath: "/bib/aip.csl",
    // navigation: {
    // navbarBreakpoint: 768
    // },
    UI: {
        text: {
            fontPaths: [
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Regular.ttf",
                    weight: '400',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Light.ttf",
                    weight: '300',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-LightItalic.ttf",
                    weight: '300',
                    style: 'italic'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Italic.ttf",
                    weight: '400',
                    style: 'italic'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Medium.ttf",
                    weight: '500',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-MediumItalic.ttf",
                    weight: '500',
                    style: 'italic'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Thin.ttf",
                    weight: '300',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-ThinItalic.ttf",
                    weight: '300',
                    style: 'italic'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Bold.ttf",
                    weight: '600',
                    style: 'bold'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-BoldItalic.ttf",
                    weight: '600',
                    style: 'italic'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Bold.ttf",
                    weight: '600',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Bold.ttf",
                    weight: '600',
                    style: 'normal'
                },
                {
                    path: "/Users/bigsexy/Desktop/notes/App/public/font/Roboto/Roboto-Bold.ttf",
                    weight: '600',
                    style: 'normal'
                },
            ],
        },
        colors: {
            yellow: {
                dark: {
                    muted: {
                        contrast: "#fff"
                    }
                }
            },
        },
        table: {
            maxHeight: "300px"
        }
    },
    jupyter: {
        nbConvert: {
            nbconvertPath: "/Users/bigsexy/opt/anaconda3/envs/jupyter/bin/jupyter-nbconvert",
            conversionTimeout: 600,
        },
        environment: "/Users/bigsexy/opt/anaconda3/envs/jupyter/bin/python",
        jupyterToken: "oRQ2MLDBKYnFIipabP9oNc1CPpD57U82UiWZfjffGo76kazWetwh6aNErOJ6BMzn",
    },
    plotting: {
        plotColorCycleMethod: "inOrder",
    },
    credentials: {
        googleServiceAccountJsonPath: "/Users/bigsexy/Desktop/notes/App/PRIVATE_AUTH/ulld-service-account.json"
    },
}


export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}


const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    /* await writeConfigJson(lazyTestConfig, "/Users/bigsexy/Desktop/currentProjects/ulld/apps/sandbox/appConfig.ulld.json") */
    const config = getInternalConfig()
    /* logger.debug(JSON.stringify(config, null, 4), { label: "Config" }) */

    const cookieJar = cookies()
    /* const darkMode = cookieJar.has("darkMode") */
    const darkMode = true
    /* const s = await prisma.settings.findFirst({ */
    /*     where: { */
    /*         id: 1 */
    /*     } */
    /* }) */

    /* let settings = settingSchema.parse(s) */
    const settings = { tooltips: true }

    const preferFs = cookieJar.has("preferFs")

    let p = { "data-theme": darkMode ? "dark" : "light" }




    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx("group/html js-focus-visible", darkMode && "dark", Boolean(settings && settings.tooltips === false) && "noTooltips", process.env.NODE_ENV === "development" && "debug-screens")}
            data-js-focus-visible=""
            {...p}
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
                <RequireJsLoader
                />
            </head>
            <body
                className={clsx("group/body",
                    fontSans.variable,
                    preferFs && "preferFs")}
                id={`Ulld-body-root`}
            >
                <StateWrappedUI
                    settings={settings}
                    darkMode={darkMode}
                    config={config}
                />
                {props.children}
                <Toaster />
                {props.modal && props.modal}
            </body>
        </html>
    )
}


export default RootLayout
