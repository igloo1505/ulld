import React, { PointerEvent } from "react";
import { NavigationFormSettingSchema } from "../../form/schema";
import { PlusIcon, XIcon } from "lucide-react";
import { useFormContext } from "@ulld/full-form/form";
import { Reorder, useDragControls } from "framer-motion";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
} from "@ulld/tailwind/context-menu";
import { useNavigationSettingsDispatch } from "../../context";
import FooterSectionLinkList from "./footerSectionLinkList";
import { motion } from "framer-motion";
import cn from "@ulld/utilities/cn";

interface FooterSectionProps {
    item: NavigationFormSettingSchema["footerSections"][number];
    idx: number;
    isRow: boolean;
}

interface AddItemButtonProps {
    disabled: boolean;
    sectionIndex: number;
}

interface FooterSectionLabelProps {
    label: string;
    idx: number;
}

const AddItemButton = ({ disabled, sectionIndex }: AddItemButtonProps) => {
    const dispatch = useNavigationSettingsDispatch();
    return (
        <button
            disabled={disabled}
            className={
                "w-full text-sm hover:bg-muted/40 p-2 rounded transition-colors duration-200 mt-2"
            }
            onClick={() => {
                dispatch({
                    type: "addFooterItemLink",
                    payload: sectionIndex,
                });
            }}
        >
            <PlusIcon className={"w-4 h-4 inline-block mr-2"} />
            <div className={"inline-block"}>Add Link</div>
        </button>
    );
};

/* NOTE: Abandoning this for now. Would be a nice feature to easily edit the title, but not worth the time up front. */
/* const FooterSectionLabel = ({ label, idx }: FooterSectionLabelProps) => { */
/*     const dispatch = useNavigationSettingsDispatch(); */
/*     const show = () => { */
/*         dispatch({ */
/*             type: "editFooterSectionLabel", */
/*             payload: idx, */
/*         }); */
/*     }; */
/*     return ( */
/*         <div className={"w-fit"}> */
/*             <ContextMenu> */
/*                 <ContextMenuTrigger className={"w-fit"}> */
/*                     <h6 className={"font-semibold mb-4"}>{label}</h6> */
/*                 </ContextMenuTrigger> */
/*                 <ContextMenuContent> */
/*                     <ContextMenuItem className={"text-foreground"} inset onClick={show}> */
/*                         Edit */
/*                     </ContextMenuItem> */
/*                 </ContextMenuContent> */
/*             </ContextMenu> */
/*         </div> */
/*     ); */
/* }; */

const FooterSection = ({ item, idx, isRow }: FooterSectionProps) => {
    const controls = useDragControls();
    function startDrag(event: PointerEvent<Element> | PointerEvent) {
        controls.start(event, { snapToCursor: false });
    }

    const form = useFormContext<NavigationFormSettingSchema>();

    return (
        <Reorder.Item
            className={
                cn("w-full relative flex flex-col justify-start items-center h-fit p-4 bg-card border rounded-lg select-none", isRow && 'h-full')
            }
            drag={isRow ? "x" : "y"}
            key={item.label}
            value={item}
            dragListener={false}
            dragControls={controls}
        >
            <XIcon
                className={
                    "absolute top-3 right-3 w-3 h-3 cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200"
                }
                onClick={() => {
                    form.setValue(
                        "footerSections",
                        form.getValues("footerSections").filter((x, i) => i !== idx),
                    );
                }}
            />
            <motion.div
                className={"w-full cursor-grab"}
                onPointerDown={startDrag}
                whileDrag={{
                    cursor: "grabbing",
                }}
            >

                    <h6 className={"font-semibold mb-4"}>{item.label}</h6>
            </motion.div>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <FooterSectionLinkList items={item.items} sectionIndex={idx} />
                {item.items.length < 5 && (
                    <AddItemButton sectionIndex={idx} disabled={item.items.length >= 5} />
                )}
            </div>
        </Reorder.Item>
    );
};

FooterSection.displayName = "FooterSection";

export default FooterSection;
