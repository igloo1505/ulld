import React from "react";
import { ConfigurationFormData } from "../../staticData";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import { Badge } from "@ulld/tailwind/badge";
import NoteTypeItemDropdown from "./noteTypeItemDropdownMenu";
import { useNoteTypeFormState } from "./useNoteTypeFormState";

interface NoteTypeItemProps {
    item: ConfigurationFormData["noteTypes"][number];
    index: number;
}

const NoteTypeItem = ({ item, index }: NoteTypeItemProps) => {
    const { setEditingItem, removeItem } = useNoteTypeFormState();

    const editItem = () => {
        setEditingItem(index);
    };

    const remove = () => {
        removeItem(index);
    };

    return (
        <div
            className={
                "w-full grid py-4 pr-4 rounded border hover:bg-secondary/30 transition-colors duration-300"
            }
            style={{
                gridTemplateColumns: "[icon] 80px [body] 1fr [menu] 40px",
            }}
            onClick={editItem}
        >
            <DynamicIcon
                name={item.icon as ValidIconName}
                className={"w-8 h-8 place-self-center"}
                style={{
                    gridColumn: "icon",
                }}
            />
            <div
                className={"flex flex-col justify-start items-start gap-4"}
                style={{
                    gridColumn: "body",
                }}
            >
                <h4 className={"text-xl"}>{item.label}</h4>
                <div className={"flex flex-row justify-start items-start gap-2"}>
                    {item.inSidebar && (
                        <Badge role="button" className={"cursor-pointer"}>
                            Sidebar
                        </Badge>
                    )}
                    {item.inNavbar && (
                        <Badge role="button" className={"cursor-pointer"}>
                            Navbar
                        </Badge>
                    )}
                </div>
            </div>
            <div
                className={
                    "flex flex-col justify-center items-center place-self-center"
                }
                style={{
                    gridColumn: "menu",
                }}
            >
                <NoteTypeItemDropdown
                    removeItem={remove}
                    editItem={editItem}
                    label={item.label}
                />
            </div>
        </div>
    );
};

NoteTypeItem.displayName = "NoteTypeItem";

export default NoteTypeItem;
