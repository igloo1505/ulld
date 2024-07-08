"use client"
import { useEffect, useState } from "react";
import { codeToHtml, type BundledTheme, type BundledLanguage } from "shiki";
import { useAppConfig } from "./useAppConfig";
import { useClientDarkMode } from "./useClientDarkMode";

export const useShikiParse = (
    initialContent: string,
    initialTheme: BundledTheme = "dracula",
    initialLanguage: BundledLanguage = "python",
) => {

    const [appConfig, setAppConfig] = useAppConfig();
    const dm = useClientDarkMode()
    const [content, setContent] = useState<string | undefined>(undefined);
    const [raw, setRaw] = useState(initialContent);
    const [theme, setTheme] = useState<BundledTheme>(initialTheme);
    const [language, setLanguage] = useState<BundledLanguage>(initialLanguage);

    useEffect(() => {
        if(!initialTheme){
            setTheme(appConfig?.code.theme[dm ? "dark" : "light"] || "dracula")
        }
    }, [initialTheme])

    const handleContent = async (_content: string) => {
        const parsedContent = await codeToHtml(_content, {
            theme: theme,
            lang: language,
            mergeWhitespaces: false,
        });
        setContent(parsedContent);
    };

    useEffect(() => {
        handleContent(raw);
    }, [raw]);

    useEffect(() => {
        if (!content) return;
        handleContent(raw);
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
