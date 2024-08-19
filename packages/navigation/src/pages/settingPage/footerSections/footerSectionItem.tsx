import React, { ReactNode } from "react";
import { NavigationFormSettingSchema } from "../form/schema";
import FooterSectionItemLink from "./footerSectionItemLink";
import { PlusIcon, XIcon } from "lucide-react";
import { useFormContext } from "@ulld/full-form/form";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
} from "@ulld/tailwind/context-menu";
import { useNavigationSettingsDispatch } from "../context";

interface FooterSectionProps {
    item: NavigationFormSettingSchema["footerSections"][number];
    idx: number;
}

interface AddItemButtonProps {
    disabled: boolean;
}

interface FooterSectionLabelProps {
    label: string;
    idx: number;
}

const AddItemButton = ({ disabled }: AddItemButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={
                "w-full text-sm hover:bg-muted/40 p-2 rounded transition-colors duration-200"
            }
        >
            <PlusIcon className={"w-4 h-4 inline-block mr-2"} />
            <div className={"inline-block"}>Add Link</div>
        </button>
    );
};

const FooterSectionLabel = ({ label, idx }: FooterSectionLabelProps) => {
    const dispatch = useNavigationSettingsDispatch();
    const show = () => {
        dispatch({
            type: "editFooterSectionLabel",
            payload: idx,
        });
    };
    return (
        <div className={"w-fit"}>
            <ContextMenu>
                <ContextMenuTrigger className={"w-fit"}>
                    <h6 className={"font-semibold mb-4 cursor-default"}>{label}</h6>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem className={"text-foreground"} inset onClick={show}>
                        Edit
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </div>
    );
};

const FooterSection = ({ item, idx }: FooterSectionProps) => {
    const form = useFormContext<NavigationFormSettingSchema>();
    return (
        <div
            className={
                "w-full relative flex flex-col justify-start items-center h-fit p-4 bg-card/80 border rounded-lg"
            }
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
            <div className={"w-full"}>
                <FooterSectionLabel label={item.label} idx={idx} />
            </div>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <>
                    {item.items.map((x, i) => {
                        return <FooterSectionItemLink key={`${x.href}-${i}`} data={x} />;
                    })}
                    <AddItemButton disabled={item.items.length >= 5} />
                </>
            </div>
        </div>
    );
};

FooterSection.displayName = "FooterSection";

export default FooterSection;
