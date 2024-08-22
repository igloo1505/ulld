"use client";
import type { BundledLanguage, BundledTheme } from "shiki"
import React, { useEffect } from "react";
import { useCodeHighlighter } from "@ulld/hooks/useCodeHighlighter";
import clsx from "clsx";
import { CopyIcon } from "lucide-react";
import { connect } from "react-redux";
import CodeThemeContextMenu from "./codeThemeContextMenu";
import { RootState } from "@ulld/state/store";
import { useToast } from "@ulld/tailwind/use-toast";
import { copyStringToClipboard } from "@ulld/utilities/copyStringToClipboard";
import { ParsedAppConfig } from "@ulld/configschema/types";
import { ReduxProvider } from "@ulld/state/wrappers/ReduxProvider";
import { EmbeddedLoadingIndicator } from "@ulld/embeddable-components/components/loadingIndicator";
import { useAppConfig } from "@ulld/hooks/useAppConfig";


interface CodeHighlightContainerProps {
    children: string;
    language: BundledLanguage;
    className?: string;
    theme?: BundledTheme;
    minimal?: boolean
}

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    configTheme: state.config?.code?.theme,
    props: props,
}));

const tertiaryTheme = "material-theme-ocean";

const CHC =
    ({
        children,
        language = "python",
        className,
        theme: _theme,
        minimal
    }: CodeHighlightContainerProps) => {
        const [appConfig] = useAppConfig()

        const getTheme = (themeoverride: BundledTheme | undefined | null, themeType: "dark" | "light") => {
            if (themeoverride) return themeoverride as BundledTheme;
            let configTheme = appConfig?.code.theme
            if (themeType === "dark" && configTheme?.dark) {
                return configTheme.dark;
            }
            if (themeType === "light" && configTheme?.light) {
                return configTheme.light;
            }
            return tertiaryTheme as BundledTheme;
        };

        const { toast } = useToast();

        const { html, setThemes, setContent, setLanguage, loading } = useCodeHighlighter({
            minimal,
            lang: language,
            themes: {
                dark: getTheme(_theme, "dark"),
                light: getTheme(_theme, "light")
            },
            code: children
        });

        useEffect(() => {
            setThemes({
                dark: getTheme(_theme, "dark"),
                light: getTheme(_theme, "light")
            })
        }, [_theme, appConfig]);

        useEffect(() => {
            setLanguage(language)
        }, [language])

        useEffect(() => {
            setContent(children)
        }, [children])

        const copyCode = async () => {
            await copyStringToClipboard(children);
            toast({
                title: "Success",
                description: `The ${language} code has been copied to your clipboard.`,
            });
        };

        return (
            <CodeThemeContextMenu
                onThemeChange={setThemes}
                className={"w-full min-w-full max-w-full"}
            >
                <div
                    className={clsx(
                        "w-full h-fit relative group/codehighlight no-scrollbar max-w-full",
                        className,
                    )}
                >
                    <a
                        role="button"
                        onClick={copyCode}
                        className={
                            "z-10 absolute top-2 right-2 p-2 hidden bg-primary text-primary-foreground rounded group-hover/codehighlight:flex flex-col justify-center items-center"
                        }
                    >
                        <CopyIcon className={"w-3 h-3"} />
                    </a>
                    {(typeof html === "string" && !loading) ? (
                        <div
                            className={clsx(
                                "overflow-auto max-w-full w-full max-h-full min-w-full [&>pre]:w-full [&>pre]:border [&>pre]:text-[12px] [&>pre]:overflow-auto no-overscroll-x",
                                children.length > 0 && "[&_.line]:px-4 [&>pre]:py-4",
                            )}
                            dangerouslySetInnerHTML={{
                                __html: html,
                            }}
                        ></div>
                    ) : (
                        <EmbeddedLoadingIndicator
                            className={"max-w-[150px] max-h-[150px]"}
                        />
                    )}
                </div>
            </CodeThemeContextMenu>
        );
    };

export const CodeHighlightContainer = (props: CodeHighlightContainerProps) => {
    return (
        <ReduxProvider>
            <CHC {...props} />
        </ReduxProvider>
    );
};

CodeHighlightContainer.displayName = "CodeHighlightContainer";
