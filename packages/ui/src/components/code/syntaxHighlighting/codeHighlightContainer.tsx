"use client"
import { Technologies } from '@prisma/client'
import { BundledLanguage, codeToHtml } from 'shiki'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CopyIcon } from 'lucide-react'
import { connect } from 'react-redux';
import CodeThemeContextMenu from './codeThemeContextMenu'
import { RootState, languageNameMap } from '@ulld/state'
import { useToast } from '@ulld/tailwind'
import { copyStringToClipboard } from '@ulld/utilities'
import { ParsedAppConfig } from '@ulld/configschema'
import { LoadingIndicator } from '../..'


type ShikiTheme = BundledLanguage

interface CodeHighlightContainerProps {
    children: string
    language: Technologies
    className?: string
    minimal?: boolean // if minimal will load only selected language.
    theme?: ShikiTheme
}


const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    configTheme: state.config?.code.theme,
    props: props
}))

const tertiaryTheme = "material-theme-ocean"

// TODO: Add a context menu that allows the switchin of themes dynamically.
export const CodeHighlightContainer = connector(({ children, language, className, minimal, theme: _theme, configTheme, darkMode }: CodeHighlightContainerProps & {
    configTheme: ParsedAppConfig["code"]["theme"] | undefined,
    darkMode: boolean
}) => {
    const [theme, _setTheme] = useState<string | null | undefined>(undefined)
    const [html, setHtml] = useState<string | null>(null)
    const { toast } = useToast()
    const setTheme = (t: string) => {
        if (languageNameMap[t as keyof typeof languageNameMap]) {
            return _setTheme(languageNameMap[t as keyof typeof languageNameMap])
        }
        _setTheme(t)
    }

    const getTheme = (themeOverride: string | undefined | null) => {
        if (themeOverride) return themeOverride
        if (darkMode && configTheme?.dark) {
            return configTheme.dark
        }
        if (!darkMode && configTheme?.light) {
            return configTheme.light
        }
        return tertiaryTheme
    }

    const highlightCode = async (l: typeof language, t: typeof theme) => {
        const _html = await codeToHtml(children, {
            lang: l,
            theme: getTheme(t),
        })
        setHtml(_html)
    }

    useEffect(() => {
        highlightCode(language, theme)
    }, [language, minimal, theme])

    const copyCode = async () => {
        await copyStringToClipboard(children)
        toast({
            title: "Success",
            description: `The ${language} code has been copied to your clipboard.`
        })
    }

    if (html) {
        return (
            <CodeThemeContextMenu
                onThemeChange={setTheme}
            >
                <div className={clsx("w-fit h-fit relative group/codeHighlight no-scrollbar max-w-full overflow-auto", className)}>
                    <a role="button" onClick={copyCode} className={"absolute top-2 right-2 p-2 hidden bg-primary rounded group-hover/codeHighlight:flex flex-col justify-center items-center"}>
                        <CopyIcon className={"w-3 h-3"} />
                    </a>
                    <div className={clsx("overflow-auto max-w-fit w-fit max-h-full min-w-min [&>pre]:w-fit dark:hidden [&>pre]:border [&>pre]:text-[12px]", children.length > 0 && "[&>pre]:p-4")}
                        dangerouslySetInnerHTML={{
                            __html: html
                        }}
                    ></div>
                </div>
            </CodeThemeContextMenu>
        )
    }
    return <LoadingIndicator />
})


CodeHighlightContainer.displayName = "CodeHighlightContainer"

