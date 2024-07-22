import { PageType } from "#/types/general";
import React from "react";
import Image from "next/image";
import BlogSummaryEquation from "./equation";
import IconImage from "./icon";
import { ValidIconName } from "@ulld/icons";

interface BlogSummaryImageSectionProps {
    item: PageType;
}

const BlogSummaryImageSection = ({ item }: BlogSummaryImageSectionProps) => {
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
