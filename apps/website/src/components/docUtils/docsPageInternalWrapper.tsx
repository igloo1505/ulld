"use client";
import { DocsPage } from "fumadocs-ui/page";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { InternalFumaToc } from "./toc/main";
import { TableOfContents } from "fumadocs-core/server";
import { buttonVariants } from "@ulld/tailwind/button";
import { Link } from "lucide-react";

interface DocsPageInternalWrapperProps {
    children: ReactNode;
    toc: TableOfContents;
    full?: boolean;
    noteId?: string
    containerId: string
}

const TocSourceFooterButton = ({ noteId }: { noteId?: string }) => {
    if (!noteId) {
        return null;
    }

    return (
        <Link
            className={buttonVariants({ variant: "outline" })}
            href={`/withSource?id=${noteId}`}
        >
            Source
        </Link>
    );
};

const DocsPageInternalWrapper = ({
    toc,
    full,
    noteId,
    containerId,
    children,
}: DocsPageInternalWrapperProps) => {
    const containerRef = useRef<HTMLElement>(null!)
    const [haveSetRef, setHaveSetRef] = useState(false)

    useEffect(() => {
        let em = document.getElementById(containerId)
        if(em){
           containerRef.current =  em
            setHaveSetRef(true)
        }
    }, [containerId])

    return (
        <DocsPage
            toc={toc}
            tableOfContent={{
                /* component: <Table */ // Replace table of contents with the fuma built component when on wifi and able to review docs.
                footer: <TocSourceFooterButton noteId={noteId} />,
                component: <InternalFumaToc toc={toc} containerRef={containerRef} />
            }}
            full={full}
        >
            {children}
        </DocsPage>
    );
};

DocsPageInternalWrapper.displayName = "DocsPageInternalWrapper";

export default DocsPageInternalWrapper;
