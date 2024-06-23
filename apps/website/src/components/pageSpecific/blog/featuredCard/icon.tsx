import { DynamicIcon, ValidIconName } from "@ulld/icons";
import React from "react";

interface BlogPostCardIconProps {
    icon: ValidIconName;
}

const BlogPostCardIcon = ({ icon }: BlogPostCardIconProps) => {
    return (
        <div className={"w-full h-full flex flex-col justify-center items-center p-4"}>
            <DynamicIcon name={icon} className={"w-32 h-32"} />
        </div>
    );
};

BlogPostCardIcon.displayName = "BlogPostCardIcon";

export default BlogPostCardIcon;
