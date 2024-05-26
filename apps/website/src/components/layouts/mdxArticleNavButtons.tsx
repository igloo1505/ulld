"use client";
import React from "react";
import NavbarButtonPortal from "../utility/portals/navbar";
import Link from "next/link";
import { useViewport } from "@ulld/hooks/useViewport";
import { navbarButtonClasses } from "./navbar/navbarButtonGroup";

interface MdxArticleNavButtonsProps {
    articleId?: string;
    isSource?: boolean;
}

const btnId = "mdx-article-source";

const MdxArticleNavButtons = ({
    articleId,
    isSource,
}: MdxArticleNavButtonsProps) => {
    const vp = useViewport();
    if(!articleId){
        console.log(`No article id found.`)
        return null
    }
    return (
        <NavbarButtonPortal>
                <Link
                    className={navbarButtonClasses}
                    href={
                        vp?.window.width && vp?.window?.width >= 768
                            ? `withSource?id=${articleId}`
                            : `source?id=${articleId}`
                    }
                >Source</Link>
        </NavbarButtonPortal>
    );
};

MdxArticleNavButtons.displayName = "MdxArticleNavButtons";

export default MdxArticleNavButtons;
