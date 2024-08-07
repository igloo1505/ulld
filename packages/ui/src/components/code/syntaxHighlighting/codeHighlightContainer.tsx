"use client";
import type { BundledLanguage, BundledTheme, CodeToHastOptions } from "shiki";
import React, { useEffect, useState, useCallback, useRef } from "react";
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
import { ShikiLanguage } from "@ulld/utilities/shikiLanguages";

type ShikiTheme = BundledLanguage;

interface CodeHighlightContainerProps {
    children: string;
    language: ShikiLanguage;
    className?: string;
    minimal?: boolean; // if minimal will load only selected language.
    theme?: ShikiTheme;
}

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    configTheme: state.config?.code?.theme,
    props: props,
}));

const tertiaryTheme = "material-theme-ocean";

// TODO: Add a context menu that allows the switchin of themes dynamically.
// BUG: Fix issue with code highlight container. Currently is rendering html properly but has an inherent size of 0.
const CHC = connector(
    ({
        children,
        language = "python",
        className,
        minimal,
        theme: _theme,
        configTheme,
        darkMode,
    }: CodeHighlightContainerProps & {
        configTheme: ParsedAppConfig["code"]["theme"] | undefined;
        darkMode: boolean;
    }) => {
        const [theme, _setTheme] = useState<string | null | undefined>(undefined);
        const [html, setHtml] = useState<string>("");
        const [haveShiki, setHaveShiki] = useState(false);
        const codeToHtml = useRef<
            | ((
                code: string,
                options: CodeToHastOptions<BundledLanguage, BundledTheme>,
            ) => Promise<string>)
            | null
        >(null);

        const setCodeToHtml = (
            f: (
                code: string,
                options: CodeToHastOptions<BundledLanguage, BundledTheme>,
            ) => Promise<string>,
        ) => {
            setHaveShiki(true);
            codeToHtml.current = f;
        };

        const { toast } = useToast();

        const setTheme = (t: string) => {
            _setTheme(t);
        };

        const getTheme = (themeoverride: string | undefined | null) => {
            if (themeoverride) return themeoverride;
            if (darkMode && configTheme?.dark) {
                return configTheme.dark;
            }
            if (!darkMode && configTheme?.light) {
                return configTheme.light;
            }
            return tertiaryTheme;
        };

        const gatherHighlighter = async () => {
            let _codeToHtml = await import("shiki").then((x) => x.codeToHtml);
            setCodeToHtml(_codeToHtml);
        };

        useEffect(() => {
            gatherHighlighter();
        }, []);

        useEffect(() => {
            setTheme(getTheme(_theme));
        }, [darkMode]);

        const highlightCode = async (l: typeof language, t: typeof theme) => {
            if (!codeToHtml.current) {
                return;
            }
            const _html = await codeToHtml.current(children, {
                lang: l,
                theme: getTheme(t),
            });
            setHtml(_html);
        };

        useEffect(() => {
            if (haveShiki || codeToHtml.current) {
                highlightCode(language, theme);
            }
        }, [language, minimal, theme, haveShiki]);

        const copyCode = async () => {
            await copyStringToClipboard(children);
            toast({
                title: "Success",
                description: `The ${language} code has been copied to your clipboard.`,
            });
        };

        return (
            <CodeThemeContextMenu
                onThemeChange={setTheme}
                className={"w-full min-w-full max-w-full"}
            >
                <div
                    className={clsx(
                        "w-full h-fit relative group/codehighlight no-scrollbar max-w-full overflow-auto",
                        className,
                    )}
                >
                    <a
                        role="button"
                        onClick={copyCode}
                        className={
                            "absolute top-2 right-2 p-2 hidden bg-primary text-primary-foreground rounded group-hover/codehighlight:flex flex-col justify-center items-center"
                        }
                    >
                        <CopyIcon className={"w-3 h-3"} />
                    </a>
                    {html ? (
                        <div
                            className={clsx(
                                "overflow-auto max-w-full w-full max-h-full min-w-full [&>pre]:w-full [&>pre]:border [&>pre]:text-[12px]",
                                children.length > 0 && "[&>pre]:p-4",
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
    },
);

export const CodeHighlightContainer = (props: CodeHighlightContainerProps) => {
    return (
        <ReduxProvider>
            <CHC {...props} />
        </ReduxProvider>
    );
};

CodeHighlightContainer.displayName = "CodeHighlightContainer";
