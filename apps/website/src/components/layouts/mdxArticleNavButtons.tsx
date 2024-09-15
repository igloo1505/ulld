"use client";
import React from "react";
import NavbarButtonPortal from "../utility/portals/navbar";
import Link from "next/link";
import { navbarButtonClasses } from "./navbar/navbarButtonGroup";
import { useMediaQuery } from "react-responsive";

interface MdxArticleNavButtonsProps {
    articleId?: string;
    isSource?: boolean;
}

const btnId = "mdx-article-source";

const MdxArticleNavButtons = ({
    articleId,
    isSource,
}: MdxArticleNavButtonsProps) => {
    const bp = useMediaQuery({
        minWidth: 768
    })
    if(!articleId){
        console.log(`No article id found.`)
        return null
    }
    if(isSource){
        return null
    }
    return (
        <NavbarButtonPortal>
                <Link
                    className={navbarButtonClasses}
                    href={
                       bp 
                            ? `/withSource?id=${articleId}`
                            : `/source?id=${articleId}`
                    }
                >Source</Link>
        </NavbarButtonPortal>
    );
};

MdxArticleNavButtons.displayName = "MdxArticleNavButtons";

export default MdxArticleNavButtons;
