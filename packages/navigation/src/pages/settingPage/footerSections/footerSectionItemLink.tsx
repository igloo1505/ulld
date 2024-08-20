import React from "react";
import { NavigationFormSettingSchema } from "../form/schema";
import { Reorder, useDragControls } from "framer-motion";
import { GripIcon, Trash2Icon } from "lucide-react";

interface FooterSectionItemLinkProps {
    item: NavigationFormSettingSchema["footerSections"][number]["items"][number];
    itemIndex: number;
    sectionIndex: number;
}

const FooterSectionItemLink = ({
    item,
    sectionIndex,
    itemIndex,
}: FooterSectionItemLinkProps) => {
    /* const controls = useDragControls(); */
    return (
        <Reorder.Item
            key={`${item.label}-${sectionIndex}`}
            value={item}
            className={
                "w-full px-3 py-2 border bg-background cursor-pointer hover:bg-secondary/60 transition-colors duration-200"
            }
        /* dragListener={false} */
        /* dragControls={controls} */
        >
            <div className={"grid grid-cols-[30px_auto_30px] place-items-center"}>
                <div
                    className={"w-full h-full flex flex-col justify-center items-start"}
                >
                    <Trash2Icon
                        className={
                            "w-3 h-3 text-red-500 dark:text-red-400 place-self-start"
                        }
                    />
                </div>
                <div className={"w-full"}>{item.label}</div>
                <GripIcon
                    /* onPointerDown={(e) => controls.start(e)} */
                    className={"w-3 h-3 text-muted-foreground"}
                />
            </div>
        </Reorder.Item>
    );
};

FooterSectionItemLink.displayName = "FooterSectionItemLink";

export default FooterSectionItemLink;
