import type { ReactNode } from "react";
import React from "react";
import { Reorder } from "framer-motion";
import { useNavSettingsForm } from "../../state/useForm";
import type { NavigationFormSettingSchema } from "../../form/schema";
import { linkItemIsEqual } from "../../form/utils";
import SidebarLinkListItem from "./sidebarLinkListItem";
import AddSidebarLinkForm from "./addSidebarLinkForm/main";
import AddSidebarLinkFormContext from "./addSidebarLinkForm/formContext";


const NavigationSidebarSettingsSection = (
): ReactNode => {
    const formKey = "sidebarLinks";
    const form = useNavSettingsForm();

    const existingItems = form.watch(formKey);

    const removeItem = (
        item: NavigationFormSettingSchema["sidebarLinks"][number],
    ): void => {
        form.setValue(
            formKey,
            existingItems.filter((f) =>
                !linkItemIsEqual(f, item),
            ),
        );
    };

    return (
        <div className="w-full">
            <AddSidebarLinkFormContext>
                <AddSidebarLinkForm
                    onAddItem={(newItem) => {
                        form.setValue(formKey, [...existingItems, newItem]);
                    }}
                    totalItems={existingItems.length}
                />
            </AddSidebarLinkFormContext>
            <Reorder.Group
                axis="y"
                
                className="not-prose w-full flex flex-col justify-center items-start"
                onReorder={(newValues) => {
                    form.setValue(formKey, newValues);
                }}
                values={existingItems}
            >
                {existingItems.map((item) => (
                    <SidebarLinkListItem
                        item={item}
                        key={`sidebarlink-${item.label}`}
                        removeItem={() => {
                            removeItem(item)
                        }}
                    />
                ))}
            </Reorder.Group>
        </div>
    );
};

NavigationSidebarSettingsSection.displayName =
    "NavigationSidebarSettingsSection";

export default NavigationSidebarSettingsSection;
