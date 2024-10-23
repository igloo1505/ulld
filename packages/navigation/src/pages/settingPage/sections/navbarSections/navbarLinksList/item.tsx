"use client";
import { motion, Reorder, useDragControls } from "framer-motion";
import { GripIcon as _GripIcon, XIcon } from "lucide-react";
import type { PointerEvent, ReactNode } from "react";
import React from "react";
import type { NavigationFormSettingSchema } from "../../../form/schema";
import { ItemValueLabel } from "../../sidebarSections/sidebarLinkListItem";

const GripIcon = motion(_GripIcon);

interface NavbarLinkListItemProps {
    item: NavigationFormSettingSchema["navbarLinks"][number];
    removeItem: () => void;
}

const NavbarLinkListItem = ({ item, removeItem }: NavbarLinkListItemProps): ReactNode => {
    const controls = useDragControls();

    function startDrag(event: PointerEvent): void {
        controls.start(event, { snapToCursor: false });
    }

    return (
        <Reorder.Item
            className="w-full py-4 pr-4 border grid grid-cols-[48px_1fr_48px] select-none bg-card"
            dragControls={controls}
            dragListener={false}
            value={item}
        >
            <XIcon
                className="size-4 place-self-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                onClick={removeItem}
            />
            <div
                className="w-full flex flex-col justify-start items-start lg:grid lg:grid-cols-2 lg:grid-rows-1"
            >
                <div>{item.label}</div>
                <ItemValueLabel 
                    item={item}
                />
            </div>
            <GripIcon
                className="cursor-grab text-muted-foreground size-4 place-self-center"
                onPointerDown={startDrag}
                whileDrag={{
                    cursor: "grabbing",
                }}
            />
        </Reorder.Item>
    );
};

NavbarLinkListItem.displayName = "NavbarLinkListItem";

export default NavbarLinkListItem;
