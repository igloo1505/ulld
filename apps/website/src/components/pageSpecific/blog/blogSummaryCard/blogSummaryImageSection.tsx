import { PageType } from "#/types/general";
import React, { CSSProperties } from "react";
import Image from "next/image";
import BlogSummaryEquation from "./equation";
import IconImage from "./icon";
import { ValidIconName } from "@ulld/icons";
import staticData from "#/staticData/mdxData.json"

interface BlogSummaryImageSectionProps {
    item: PageType;
}

const BlogSummaryImageSection = ({ item }: BlogSummaryImageSectionProps) => {
    let imageStyles = item.data.id ? staticData.imageStyles[item.data.id as keyof typeof staticData.imageStyles] || {} : {}
    if (item.data.images) {
        return (
            <Image
                src={`/assets/blog/${Array.isArray(item.data.images)
                        ? item.data.images[0]
                        : (item.data.images as string)
                    }`}
                alt="Featured blog post image"
                className={
                    "w-full h-full lg:max-h-full lg:h-full object-cover rounded-[20px]"
                }
                style={imageStyles as CSSProperties || {}}
                width={400}
                height={400}
            />
        );
    }
    if (item.data.featuredEquation) {
        return <BlogSummaryEquation equation={item.data.featuredEquation} />;
    }
    if (item.data.icon) {
        return <IconImage icon={item.data.icon as ValidIconName} />;
    }
};

BlogSummaryImageSection.displayName = "BlogSummaryImageSection";

export default BlogSummaryImageSection;
