"use client";
import React from "react";
import NavbarButtonPortal from "../utility/portals/navbar";
import Link from "next/link";
import { useViewport } from "@ulld/hooks/useViewport";

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
    return (
        <NavbarButtonPortal>
            {articleId && (
                <Link
                    href={
                        vp?.window.width && vp?.window?.width >= 768
                            ? `withSource?id=${articleId}`
                            : `source?id=${articleId}`
                    }
                ></Link>
            )}
        </NavbarButtonPortal>
    );
};

MdxArticleNavButtons.displayName = "MdxArticleNavButtons";

export default MdxArticleNavButtons;
