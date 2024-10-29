import { cn } from "@ulld/utilities/cn";
import type { AdmonitionProps } from "@ulld/utilities/types";
import type { AdmonitionContainerProps, AdmonitionTitleProps } from "./admonitionUtils";

export const getTitleClassNames = (props: AdmonitionProps): string => cn("[&_p]:w-full [&_p]:max-w-full block", props.dropdown && "pr-8", props.titleBold && "font-semibold")

export const getBodyClassNames = (props: AdmonitionContainerProps): string =>
    cn(
        "prose dark:prose-invert body w-full min-w-full h-auto bg-gray-100 dark:bg-gray-800",
        props.type === "plain" && "bg-transparent dark:bg-transparent",
        !props.dropdown && "admonition-bodyContainer p-4",
        props.center &&
        "flex flex-col justify-center items-center gap-4 text-center",
    );

export const footerClassNames = "w-full py-3 px-3 text-sm text-muted-foreground bg-muted"


export const getContainerClassNames = (props: AdmonitionContainerProps): string => cn(
                `rounded-lg my-4 admonition overflow-hidden group/fold h-fit open w-full max-w-full`,
                props.type || "note",
                props.sidebar &&
                "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4",
            )

export const getTitleContainerClassNames = (props: AdmonitionTitleProps): string => cn("title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg relative z-[10] not-prose  min-w-full max-w-full w-full h-fit min-h-fit inline-block", props.dropdown && "cursor-pointer")

export const iconContainerClassNames = "w-4 min-w-4 h-full mr-2 float-left block"

export const iconClassNames = "w-4 h-4 inline"
