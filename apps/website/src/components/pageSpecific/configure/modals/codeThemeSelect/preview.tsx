import { useFormContext } from "@ulld/full-form/form";
import React, { useEffect } from "react";
import { CodeThemeModalSchema } from "./schema";
import { useShikiParse } from "@ulld/hooks/useShikiParse";
import { defaultThemes } from "@ulld/configschema/zod/codeConfig";
import clsx from "clsx";
import { useResponsiveCode } from "@ulld/hooks/useResponsiveCode";

interface CodeThemeModalPreviewProps {
    content: string;
    themeMode: "dark" | "light";
}

const CodeThemeModalPreview = ({
    content,
    themeMode
}: CodeThemeModalPreviewProps) => {
    const form = useFormContext<CodeThemeModalSchema>();
    const themeValue = form.watch(themeMode);
    const state = useShikiParse(
        content,
        themeValue
            ? themeValue
            : themeMode === "dark"
                ? defaultThemes.dark
                : defaultThemes.light,
        "python",
    );

    useEffect(() => {
        state.setTheme(themeValue)
    }, [themeValue])

    useEffect(() => {
        state.setContent(content);
    }, [content]);


    const { ref } = useResponsiveCode<HTMLDivElement>();


    return (
        <div
            ref={ref}
            className={clsx(
                "w-full max-w-full h-fit max-h-fit overflow-y-auto block not-prose [&_pre]:max-w-full text-sm [&_code]:max-w-full [&_code]:min-w-full [&_pre]:p-4 [&_code]:whitespace-break-spaces [&_.line]:min-h-4 no-scrollbar",
                themeMode,
            )}
            dangerouslySetInnerHTML={state.content ? { __html: state.content } : undefined}
        />
    );
};

CodeThemeModalPreview.displayName = "CodeThemeModalPreview";

export default CodeThemeModalPreview;
