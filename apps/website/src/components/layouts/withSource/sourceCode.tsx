"use client";
import NavbarButtonPortal from "#/components/utility/portals/navbar";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { BundledTheme, codeToHtml } from "shiki";
import ShikiThemeSelect from "#/components/modals/shikiTheme";
import { navbarButtonClasses } from "../navbar/navbarButtonGroup";
import { useObserveChildren } from "@ulld/hooks/useObserveChildren";

interface SourceCodeProps extends HTMLMotionProps<"div"> {
    content: string;
    theme?: BundledTheme;
    maxWidth?: string | null;
}

const SourceCode = forwardRef(
    (
        { content, maxWidth, ...props }: SourceCodeProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const [source, setSource] = useState<string | null | undefined>(null);
        const [theme, setTheme] = useState<{ open: boolean; value: BundledTheme }>({
            open: false,
            value: "dracula",
        });

        const gatherSource = async () => {
            const sourceCode = await codeToHtml(content, {
                theme: theme.value,
                lang: "mdx",
                mergeWhitespaces: false,
            });
            setSource(sourceCode);
        };

        useEffect(() => {
            gatherSource();
        }, [content, theme]);

        const getMaxWidth = (): string => {
            if (ref && "current" in ref) {
                let rect = ref.current?.getBoundingClientRect();
                if (rect) {
                    return `${Math.floor(rect.width - 32)}px`;
                }
            }
            return "40vw";
        };

        /* FIX: This is why useResponsiveCode wasn't working. This is not a set state function as I lazily assumed, it was just called this. Correct that and then test that hook. Also remove the other autoWrapCode hook as it's applying the same thing. */
        const setMaxWidth = (mw?: string) => {
            let newMaxWidth = mw ? mw : getMaxWidth()
            if (newMaxWidth && ref && "current" in ref) {
                let ems = ref.current?.querySelectorAll(".line");
                ems?.forEach((a) => {
                    if ("style" in a) {
                        /* @ts-ignore */
                        a.style.maxWidth = newMaxWidth;
                    }
                });
            }
        };

        const handleResize = () => {
            setMaxWidth()    
        }


        useEffect(() => {
            let mw = maxWidth ? maxWidth : getMaxWidth();
            setMaxWidth(mw);
        }, [maxWidth]);

        useObserveChildren(() => setMaxWidth(), {
            once: true
        }, ref)

        useEffect(() => {
           window.addEventListener("resize", handleResize) 
           return () => window.removeEventListener("resize", handleResize) 
        }, [])

        return (
            <>
                <NavbarButtonPortal>
                    <button
                        className={navbarButtonClasses}
                        onClick={() => setTheme({ ...theme, open: true })}
                    >
                        Theme
                    </button>
                </NavbarButtonPortal>
                <ShikiThemeSelect
                    {...theme}
                    onOpenChange={(o) => setTheme({ ...theme, open: o })}
                    onChange={(newValue) => {
                        setTheme({
                            open: false,
                            value: newValue,
                        });
                    }}
                />
                <motion.div
                    className={
                        "w-full max-w-full h-full max-h-full overflow-y-auto block not-prose [&_pre]:max-w-full py-6 pr-4 pl-6 text-sm [&_code]:max-w-full [&_code]:min-w-full [&_code]:whitespace-break-spaces [&_.line]:min-h-4 [&_code]:!bg-background no-scrollbar"
                    }
                    dangerouslySetInnerHTML={source ? { __html: source } : undefined}
                    {...props}
                    ref={ref}
                />
            </>
        );
    },
);

SourceCode.displayName = "SourceCode";

export default SourceCode;
