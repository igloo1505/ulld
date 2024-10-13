"use client";
import React, { PointerEvent } from "react";
import { NavigationFormSettingSchema } from "../../form/schema";
import { GripIcon as _GripIcon, XIcon } from "lucide-react";
import { motion, Reorder, useDragControls } from "framer-motion";
import { DynamicIcon } from "@ulld/icons";
import { actionLabelMap } from "../../staticSettingData";
const GripIcon = motion(_GripIcon);

interface SidebarLinkListItemProps {
    item: NavigationFormSettingSchema["sidebarLinks"][number];
    removeItem: () => void;
}

const SidebarLinkListItem = ({
    item,
    removeItem,
}: SidebarLinkListItemProps) => {
    const controls = useDragControls();

    function startDrag(event: PointerEvent<Element> | PointerEvent) {
        controls.start(event, { snapToCursor: false });
    }

    return (
        <Reorder.Item
            className={
                "w-full py-4 pr-4 border grid grid-cols-[48px_64px_1fr_48px] select-none bg-card"
            }
            value={item}
            dragListener={false}
            dragControls={controls}
        >
            <XIcon
                className={
                    "size-4 place-self-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                }
                onClick={removeItem}
            />
            <div className={"w-full h-auto place-self-center flex justify-center items-center"}>
                <DynamicIcon name={item.icon} className={"text-foreground"} />
            </div>
            <div
                className={
                    "w-full flex flex-col justify-start items-start lg:grid lg:grid-cols-2 lg:grid-rows-1"
                }
            >
                <div>{item.label}</div>
                <div className={"text-muted-foreground"}>{"url" in item ? item.url : item.action in actionLabelMap ? actionLabelMap[item.action] : item.action}</div>
            </div>
            <GripIcon
                className={"cursor-grab text-muted-foreground size-4 place-self-center"}
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
