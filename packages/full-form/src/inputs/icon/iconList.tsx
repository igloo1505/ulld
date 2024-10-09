"use client";
import React, { useState } from "react";
import List from "rc-virtual-list";
import IconSelectOption from "./iconSelectOption";
import { Input } from "@ulld/tailwind/input";
import { validIconNameList } from "@ulld/utilities/validIconNameList";

interface IconListProps {
    setValue: (newVal: (typeof validIconNameList)[number]) => void;
    setOpen: (newOpen: boolean) => void;
    className?: string;
    iconClasses?: string;
    placeholder?: string;
    listClasses?: string;
}

const formattedItems = validIconNameList.map((icon) => ({
    id: icon,
    uuid: icon,
}));

/* TODO: Implement a fuzzy search here when docs available. */
const IconList = ({
    setValue,
    setOpen,
    className,
    iconClasses,
    listClasses,
    placeholder = "Search Icons...",
}: IconListProps) => {
    const [icons, setIcons] = useState(formattedItems);
    const [inputValue, setInputValue] = useState("");

    /* TODO: Come back here and handle this filter input with the fuzzy finder package. */
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
                className={
                    "text-sm focus-visible:ring-none focus-visible:ring-offset-0 h-8 border-border text-foreground"
                }
                type="search"
                placeholder={placeholder}
            />
            <List
                data={icons}
                height={350}
                itemHeight={48}
                itemKey={"id"}
                data-id="icon-list"
                className={listClasses}
            >
                {(item, itemIndex, itemProps) => {
                    return (
                        <IconSelectOption
                            className={className}
                            item={item.id as (typeof validIconNameList)[number]}
                            setValue={setValue}
                            setOpen={setOpen}
                            iconClasses={iconClasses}
                            style={itemProps.style}
                        />
                    );
                }}
            </List>
        </>
    );
};

IconList.displayName = "IconList";

export default IconList;
