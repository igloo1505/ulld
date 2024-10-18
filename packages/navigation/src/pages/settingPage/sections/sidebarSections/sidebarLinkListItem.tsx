"use client";
import { DynamicIcon } from "@ulld/icons";
import { motion, Reorder, useDragControls } from "framer-motion";
import { GripIcon as _GripIcon, XIcon } from "lucide-react";
import React, { type PointerEvent, type ReactNode } from "react";
import type { NavigationFormSettingSchema } from "../../form/schema";
import { actionLabelMap } from "../../staticSettingData";

const GripIcon = motion(_GripIcon);

interface SidebarLinkListItemProps {
    item: NavigationFormSettingSchema["sidebarLinks"][number];
    removeItem: () => void;
}

export const ItemValueLabel = ({
    item,
}: Pick<SidebarLinkListItemProps, "item">): ReactNode => {
    return (
        <div className="text-muted-foreground">
            {item.fieldType === "action" && item.value in actionLabelMap
                ? actionLabelMap[item.value]
                : item.value}
        </div>
    );
};

const SidebarLinkListItem = ({
    item,
    removeItem,
}: SidebarLinkListItemProps): ReactNode => {
    const controls = useDragControls();

    function startDrag(event: PointerEvent): void {
        controls.start(event, { snapToCursor: false });
    }

    return (
        <Reorder.Item
            className="w-full py-4 pr-4 border grid grid-cols-[48px_64px_1fr_48px] select-none bg-card"
            dragControls={controls}
            dragListener={false}
            value={item}
        >
            <XIcon
                className="size-4 place-self-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                onClick={removeItem}
            />
            <div className="w-full h-auto place-self-center flex justify-center items-center">
                <DynamicIcon className="stroke-foreground w-6 h-6" name={item.icon} />
            </div>
            <div className="w-full flex flex-col justify-start items-start lg:grid lg:grid-cols-2 lg:grid-rows-1">
                <div>{item.label}</div>
                <ItemValueLabel item={item} />
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

SidebarLinkListItem.displayName = "SidebarLinkListItem";

export default SidebarLinkListItem;
