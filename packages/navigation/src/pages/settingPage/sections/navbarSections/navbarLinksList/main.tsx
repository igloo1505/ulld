"use client";
import React from "react";
import { useNavSettingsForm } from "../../../state/useForm";
import { Reorder } from "framer-motion";
import NavbarLinkListItem from "./item";
import { NavigationFormSettingSchema } from "../../../form/schema";

interface NavbarLinkListProps { }

const NavbarLinkList = (props: NavbarLinkListProps) => {
    const form = useNavSettingsForm();
    const items = form.watch("navbarLinks");

    const handleReorder = (
        newItems: NavigationFormSettingSchema["navbarLinks"],
    ) => {
        form.setValue("navbarLinks", newItems);
    };

    return (
        <Reorder.Group values={items} onReorder={handleReorder}>
            {items.map((x, i) => {
                return (
                    <NavbarLinkListItem
                        item={x}
                        key={`${x.label}-${"action" in x ? x.action : x.url}`}
                        removeItem={() => {
                            form.setValue(
                                "navbarLinks",
                                items.filter((l, li) => li !== i),
                            );
                        }}
                    />
                );
            })}
        </Reorder.Group>
    );
};

NavbarLinkList.displayName = "NavbarLinkList";

export default NavbarLinkList;
