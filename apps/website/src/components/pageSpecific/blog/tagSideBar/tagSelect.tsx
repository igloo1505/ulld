"use client";
import React, { useMemo } from "react";
import staticData from "#/staticData/mdxData.json";
import SelectWithHref, {
    SelectOptionWithHref,
    SelectWithHrefProps,
} from "#/components/utility/ui/selectWithHref";

interface TagSelectInputProps extends Omit<SelectWithHrefProps, "items"> {
    className?: string;
    activeTags: string[];
}

const BlogTagSelectInput = ({ className, activeTags, ...props }: TagSelectInputProps) => {
    let items = useMemo(() => {
        return staticData.tags.map((t): SelectOptionWithHref => {
            let sp = new URLSearchParams();
            for (const k of activeTags) {
                if(k !== t){
                sp.append("tags", k);
                }
            }
            if (!activeTags.includes(t)) {
                sp.append("tags", t);
            }  
            return {
                value: t,
                label: t,
                href: `/blog?${sp.toString()}`,
                active: activeTags.includes(t)
            };
        });
    }, [activeTags]);

    return <SelectWithHref
        items={items}
        placeholder="Tags"
        {...props}
    />;
};

BlogTagSelectInput.displayName = "TagSelectInput";

export default BlogTagSelectInput;
