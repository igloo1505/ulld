import React, { HTMLProps } from "react";
import staticData from "#/staticData/staticContent.json";

interface DocumentationLinkProps extends HTMLProps<HTMLAnchorElement> {
    type: keyof typeof staticData.links.docs.external;
}

const DocumentationLink = ({
    type,
    children,
    ...props
}: DocumentationLinkProps) => {
    return (
        <a {...props} href={staticData.links.docs.external[type]}>
            {children}
        </a>
    );
};

DocumentationLink.displayName = "DocumentationLink";

export default DocumentationLink;
