"use client"
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import type { ShikiTheme } from "@ulld/types";
import type { ShikiLanguage } from "@ulld/utilities/shikiLanguages";
import { useAppConfig } from "./useAppConfig";
import { useClientDarkMode } from "./useClientDarkMode";


interface UseShikiParseReturnData {
   theme: ShikiTheme
    setTheme: (newTheme: ShikiTheme) => void
    language: ShikiLanguage
    setLanguage: (newLanguage: ShikiLanguage) => void
    content?: string
    setContent: (newContent: string) => void
}


// TODO: Consider using process.env fields or an import.meta object that will be defined during the build process to according to a user's appConfig to replace fields like the default initialTheme and default initialLanguage properties here. This is how vitest does it.
export const useShikiParse = (
    initialContent: string,
    initialTheme: ShikiTheme = "dracula",
    initialLanguage: ShikiLanguage = "python",
): UseShikiParseReturnData => {

    const [appConfig] = useAppConfig();
    const dm = useClientDarkMode()
    const [content, setContent] = useState<string | undefined>(undefined);
    const [raw, setRaw] = useState(initialContent);
    const [theme, setTheme] = useState<ShikiTheme>(appConfig?.code.theme[dm ? "dark" : "light"] || initialTheme);
    const [language, setLanguage] = useState<ShikiLanguage>(initialLanguage);


    const handleContent = async (_content: string): Promise<void> => {
        const parsedContent = await codeToHtml(_content, {
            theme,
            lang: language,
            mergeWhitespaces: false,
        });
        setContent(parsedContent);
    };

    useEffect(() => {
        handleContent(raw).catch(() => {
            // eslint-disable-next-line no-console -- Need to low error. #MoveToLoggerPackage
            console.error(`Could not set content in the useShikiParse hook.`)
        })
        /* eslint-disable react-hooks/exhaustive-deps -- Need to use handleContent outside of the useEffect hook. */
    }, [raw, language, theme]);

    useEffect(() => {
        if (!content) {
            return
        }
        handleContent(raw).catch(() => {
            // eslint-disable-next-line no-console -- Need to low error. #MoveToLoggerPackage
            console.error(`Could not set content in the useShikiParse hook.`)
        })
        /* eslint-disable react-hooks/exhaustive-deps -- Need to use handleContent outside of the useEffect hook. */
    }, [language, theme]);

    return {
        theme,
        setTheme,
        language,
        setLanguage,
        content,
        setContent: (newContent: string) => {
            setRaw(newContent);
        },
    };
};
