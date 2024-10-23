"use client";
import type { ReactNode } from "react";
import React from "react";
import { Reorder } from "framer-motion";
import { useNavSettingsForm } from "../../../state/useForm";
import type { NavigationFormSettingSchema } from "../../../form/schema";
import NavbarLinkListItem from "./item";


const NavbarLinkList = (): ReactNode => {
    const form = useNavSettingsForm();
    const items = form.watch("navbarLinks");

    const handleReorder = (
        newItems: NavigationFormSettingSchema["navbarLinks"],
    ): void => {
        form.setValue("navbarLinks", newItems);
    };

    return (
        <Reorder.Group onReorder={handleReorder} values={items}>
            {items.map((x, i) => {
                return (
                    <NavbarLinkListItem
                        item={x}
                        key={`navlink-li-${x.label}-${x.value}`}
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
