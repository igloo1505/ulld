import type { ValidIconName } from "@ulld/types";
import type { AdmonitionProps } from "@ulld/utilities/admonition/types";
import type { ReactNode } from "react";
import { MdxContentCLIENT } from "@ulld/render/mdx";
import { AdmonitionContainer } from "../../admonition/admonitionContainer";
import { getAdmonitionId } from "../../admonition/admonitionUtils";
import { FoldingAdmonitionContainer } from "../../admonition/foldingAdmonitionContainer";

const ContentWrapper = ({ content, className }: {content?: ReactNode, className?: string}): ReactNode => {
    if (typeof content === "string") {
        return (
            <MdxContentCLIENT
                className={className}
                content={content}
            />
        );
    }
    return content || null;
};

const getContentWrapper = (
    content: ReactNode | undefined,
    className?: string,
): ReactNode | undefined => {
    if (typeof content !== "undefined" && content !== null && content !== "") {
        return <ContentWrapper className={className} content={content} />;
    }
};


export const Admonition = (props: AdmonitionProps): ReactNode => {
    const id = getAdmonitionId(props);
    const {footer, children, title, icon, ..._props} = props

    if (props.dropdown) {
        // Need to do this here because this will always be a client component.
        return (
            <FoldingAdmonitionContainer
                {..._props}
                body={getContentWrapper(children)}
                footer={getContentWrapper(footer)}
                icon={icon as ValidIconName | undefined}
                id={id}
                title={getContentWrapper(title)}
            />
        );
    }

    return (
        <AdmonitionContainer
            {..._props}
            body={getContentWrapper(children)}
            footer={getContentWrapper(footer)}
            icon={icon as ValidIconName | undefined}
            id={id}
            title={getContentWrapper(title)}
        />
    );
};

Admonition.displayName = "Admonition";
