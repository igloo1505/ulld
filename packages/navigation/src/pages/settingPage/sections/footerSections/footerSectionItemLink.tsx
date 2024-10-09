import React, { PointerEvent } from "react";
import { NavigationFormSettingSchema } from "../../form/schema";
import { motion, Reorder, useDragControls } from "framer-motion";
import { GripIcon as _GripIcon, Trash2Icon } from "lucide-react";

const GripIcon = motion(_GripIcon)

interface FooterSectionItemLinkProps {
    item: NavigationFormSettingSchema["footerSections"][number]["items"][number];
    itemIndex: number;
    sectionIndex: number;
    onRemove: () => void
}

const FooterSectionItemLink = ({
    item,
    sectionIndex,
    itemIndex,
    onRemove
}: FooterSectionItemLinkProps) => {
    const controls = useDragControls();
    function startDrag(event: PointerEvent<Element> | PointerEvent) {
        controls.start(event, { snapToCursor: true });
    }
    return (
        <Reorder.Item
            className={
                "w-full relative px-3 py-2 border bg-background hover:bg-secondary/60 transition-colors duration-200"
            }
            drag="y"
            key={`${item.label}-linkItem`}
            value={item}
            dragListener={false}
            dragControls={controls}
        >
            <div className={"grid grid-cols-[30px_auto_30px] place-items-center"}>
                <div
                    className={"w-full h-full flex flex-col justify-center items-start"}
                >
                    <Trash2Icon
                        className={
                            "w-3 h-3 text-red-500 dark:text-red-400 place-self-start"
                        }
                        role="button"
                        onClick={onRemove}
                    />
                </div>
                <div className={"w-full"}>{item.label}</div>
                <GripIcon
                    onPointerDown={startDrag}
                    className={"w-3 h-3 text-muted-foreground cursor-grab"}
                    whileDrag={{
                        cursor: "grabbing"
                    }}
                />
            </div>
        </Reorder.Item>
    );
};

FooterSectionItemLink.displayName = "FooterSectionItemLink";

export default FooterSectionItemLink;
