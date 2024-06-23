"use client";
import React, { useState } from "react";
import List from "rc-virtual-list";
import allIcons from "@ulld/icons/names";
import IconSelectOption from "./iconSelectOption";
import { Input } from "@ulld/tailwind/input";

interface IconListProps {
    setValue: (newVal: (typeof allIcons)[number]) => void;
    setOpen: (newOpen: boolean) => void;
    className?: string;
    iconClasses?: string
    placeholder?: string
}

const formattedItems = allIcons.map((icon) => ({
    id: icon,
    uuid: icon,
}));

/* TODO: Implement a fuzzy search here when back on wifi. */
const IconList = ({ setValue, setOpen, className, iconClasses, placeholder = "Search Icons..." }: IconListProps) => {
    const [icons, setIcons] = useState(formattedItems);
    const [inputValue, setInputValue] = useState("");
    /* TODO: Come back here and handle this filter input. */
    const filterIcons = (val: string) => {
        let regex = new RegExp(val, "gi");
        const newIcons = formattedItems.filter((a) => regex.test(a.id));
        setIcons(newIcons);
        setInputValue(val);
    };
    return (
        <>
            <Input
                value={inputValue}
                onChange={(e) => filterIcons(e.target.value)}
                className={"text-sm focus-visible:ring-none focus-visible:ring-offset-0 h-8 border-border"}
                type="search"
                placeholder={placeholder}
            />
            <List
                data={icons}
                height={350}
                itemHeight={48}
                itemKey={"id"}
                data-id="icon-list"
            >
                {(item) => (
                    <IconSelectOption
                        className={className}
                        item={item.id as (typeof allIcons)[number]}
                        setValue={setValue}
                        setOpen={setOpen}
                        iconClasses={iconClasses}
                    />
                )}
            </List>
        </>
    );
};

IconList.displayName = "IconList";

export default IconList;
