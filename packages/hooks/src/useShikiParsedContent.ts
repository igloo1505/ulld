import { useEffect, useState } from "react";
import { codeToHtml, BundledTheme, BundledLanguage } from "shiki";

export const useShikiParse = (
    initialContent: string,
    initialTheme: BundledTheme = "dracula",
    initialLanguage: BundledLanguage = "python",
) => {
    const [content, setContent] = useState<string | undefined>(undefined);
    const [raw, setRaw] = useState(initialContent);
    const [theme, setTheme] = useState<BundledTheme>(initialTheme);
    const [language, setLanguage] = useState<BundledLanguage>(initialLanguage);

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
