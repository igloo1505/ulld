"use client";
import { BundledLanguage, codeToHtml } from "shiki";
import React, { useEffect, useState } from "react";
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
        language,
        className,
        minimal,
        theme: _theme,
        configTheme,
        darkMode,
    }: CodeHighlightContainerProps & {
        configTheme: ParsedAppConfig["code"]["theme"] | undefined;
        darkMode: boolean;
    }) => {
        if (!children || typeof children !== "string" || children.trim() === "")
            return null;
        const [theme, _settheme] = usestate<string | null | undefined>(undefined);
        const [html, sethtml] = usestate<string | null>(null);
        const { toast } = usetoast();
        const settheme = (t: string) => {
            _settheme(t);
        };

        const gettheme = (themeoverride: string | undefined | null) => {
            if (themeoverride) return themeoverride;
            if (darkmode && configtheme?.dark) {
                return configtheme.dark;
            }
            if (!darkmode && configtheme?.light) {
                return configtheme.light;
            }
            return tertiarytheme;
        };

        useeffect(() => {
            settheme(gettheme(_theme));
        }, [darkmode]);

        const highlightcode = async (l: typeof language, t: typeof theme) => {
            const _html = await codetohtml(children, {
                lang: l,
                theme: gettheme(t),
            });
            sethtml(_html);
        };

        useeffect(() => {
            highlightcode(language, theme);
        }, [language, minimal, theme]);

        const copycode = async () => {
            await copystringtoclipboard(children);
            toast({
                title: "Success",
                description: `The ${language} code has been copied to your clipboard.`,
            });
        };

        return (
            <codethemecontextmenu
                onthemechange={settheme}
                classname={"w-full min-w-full max-w-full"}
            >
                <div
                    classname={clsx(
                        "w-full h-fit relative group/codehighlight no-scrollbar max-w-full overflow-auto",
                        classname,
                    )}
                >
                    <a
                        role="button"
                        onclick={copycode}
                        classname={
                            "absolute top-2 right-2 p-2 hidden bg-primary text-primary-foreground rounded group-hover/codehighlight:flex flex-col justify-center items-center"
                        }
                    >
                        <copyicon classname={"w-3 h-3"} />
                    </a>
                    {html ? (
                        <div
                            classname={clsx(
                                "overflow-auto max-w-full w-full max-h-full min-w-full [&>pre]:w-full [&>pre]:border [&>pre]:text-[12px]",
                                children.length > 0 && "[&>pre]:p-4",
                            )}
                            dangerouslysetinnerhtml={{
                                __html: html,
                            }}
                        ></div>
                    ) : (
                        <embeddedloadingindicator
                            classname={"max-w-[150px] max-h-[150px]"}
                        />
                    )}
                </div>
            </codethemecontextmenu>
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
