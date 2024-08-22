import { useEffect, useState } from "react";
import {
    BundledLanguage,
    bundledLanguages,
    BundledTheme,
    createHighlighter,
    makeSingletonHighlighter,
} from "shiki";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export const useCodeHighlighter = ({
    lang,
    themes: _themes,
    code,
    minimal = true,
}: {
    lang: BundledLanguage;
    themes:
    | BundledTheme
    | BundledTheme[]
    | {
        dark: BundledTheme;
        light: BundledTheme;
    };
    minimal?: boolean;
    code: string;
}) => {
    const [language, setLanguage] = useState(lang);
    const [themes, setThemes] = useState(_themes);
    const [content, setContent] = useState(code);
    const [value, setValue] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    const updateValue = async () => {
        setLoading(true);
        const highlighter = await getHighlighter({
            themes: typeof themes === "string" ? [themes] : Object.values(themes),
            langs: minimal ? [language] : [...Object.keys(bundledLanguages)],
        });
        let val = highlighter.codeToHtml(content, {
            lang: language,
            themes: Array.isArray(themes)
                ? {
                    light: themes[0],
                    dark: themes[1],
                }
                : typeof themes === "string"
                    ? {
                        dark: themes,
                        light: themes,
                    }
                    : themes,
            defaultColor: false
        });
        setValue(val);
        setLoading(false);
    };

    useEffect(() => {
        updateValue();
    }, [language, themes, content]);

    return {
        setLanguage,
        setThemes,
        setContent,
        loading,
        html: value,
    };
};
