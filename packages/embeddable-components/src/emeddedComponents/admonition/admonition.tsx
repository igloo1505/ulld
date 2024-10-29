import type { ValidIconName } from "@ulld/types";
import type { AdmonitionProps } from "@ulld/utilities/admonition/types";
import { MdxContentRSC } from "@ulld/render/mdx-rsc"
import type { ReactNode } from "react";
import { AdmonitionContainer } from "./admonitionContainer";
import { getAdmonitionId } from "./admonitionUtils";
import { FoldingAdmonitionContainer } from "./foldingAdmonitionContainer";
import { getTitleClassNames } from "./classNames";

const ContentWrapper = ({
    content,
    className,
}: {
    content?: ReactNode;
    className?: string;
}): ReactNode => {
    if (!content) {
        return null;
    }
    if (typeof content === "string") {
        return <MdxContentRSC className={className} content={content} />;
    }
    return content;
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
    const { footer, children, title, icon, ..._props } = props;

    if (props.dropdown) {
        // Need to do this here because this will always be a client component.
        return (
            <FoldingAdmonitionContainer
                {..._props}
                body={getContentWrapper(children)}
                footer={getContentWrapper(footer)}
                icon={icon as ValidIconName | undefined}
                id={id}
                title={getContentWrapper(title, getTitleClassNames(props))}
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
            title={getContentWrapper(title, getTitleClassNames(props))}
        />
    );
};

Admonition.displayName = "Admonition";
