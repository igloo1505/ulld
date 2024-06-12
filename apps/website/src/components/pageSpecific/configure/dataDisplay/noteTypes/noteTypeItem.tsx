import React from "react";
import { ConfigurationFormData } from "../../staticData";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import { XIcon } from "lucide-react";
import { Badge } from "@ulld/tailwind/badge";


interface NoteTypeItemProps {
    item: ConfigurationFormData["noteTypes"][number];
    removeItem: () => void;
    editItem: () => void;
}

const NoteTypeItem = ({ item, editItem, removeItem }: NoteTypeItemProps) => {
    console.log("item: ", item)
    return (
        <div
            className={
                "w-full grid grid-cols-[80px_1fr_40px] py-4 pr-4 rounded border hover:bg-secondary/30 transition-colors duration-300"
            }
            onClick={editItem}
        >
            <DynamicIcon name={item.icon as ValidIconName} className={"w-8 h-8 place-self-center"} />
            <div className={"flex flex-col justify-start items-start gap-4"}>
                <h4 className={"text-xl"}>{item.label}</h4>
                <div className={"flex flex-row justify-start items-start gap-2"}>
                    {item.inSidebar && <Badge
                        role="button"
                        className={"cursor-pointer"}
                    >
                        Sidebar
                    </Badge>}
                    {item.inNavbar && <Badge 
                        role="button"
                        className={"cursor-pointer"}
                    >Navbar</Badge>}
                </div>
            </div>
            <XIcon
                className={"w-4 h-4 place-self-center cursor-pointer"}
                role="button"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeItem();
                }}
            />
        </div>
    );
};

NoteTypeItem.displayName = "NoteTypeItem";

export default NoteTypeItem;
