import React from "react";
import { useNavSettingsForm } from "../../state/useForm";
import SidebarLinkListItem from "./sidebarLinkListItem";
import { Reorder } from "framer-motion";
import { NavigationFormSettingSchema } from "../../form/schema";
import AddSidebarLinkForm from "./addSidebarLinkForm/main";
import AddSidebarLinkFormContext from "./addSidebarLinkForm/formContext";
import { linkItemIsEqual } from "../../form/utils";


const NavigationSidebarSettingsSection = (
) => {
    const formKey = "sidebarLinks";
    const form = useNavSettingsForm();

    const existingItems = form.watch(formKey);

    const removeItem = (
        item: NavigationFormSettingSchema["sidebarLinks"][number],
    ) => {
        form.setValue(
            formKey,
            existingItems.filter((f) =>
                !linkItemIsEqual(f, item),
            ),
        );
    };

    return (
        <div className={"w-full"}>
            <AddSidebarLinkFormContext>
                <AddSidebarLinkForm
                    onAddItem={(newItem) => {
                        form.setValue(formKey, [...existingItems, newItem]);
                    }}
                    totalItems={existingItems.length}
                />
            </AddSidebarLinkFormContext>
            <Reorder.Group
                className={
                    "not-prose w-full flex flex-col justify-center items-start"
                }
                axis={"y"}
                values={existingItems}
                onReorder={(newValues) => {
                    form.setValue(formKey, newValues);
                }}
            >
                {existingItems.map((item) => (
                    <SidebarLinkListItem
                        item={item}
                        removeItem={() => removeItem(item)}
                        key={`sidebarlink-${item.label}`}
                    />
                ))}
            </Reorder.Group>
        </div>
    );
};

NavigationSidebarSettingsSection.displayName =
    "NavigationSidebarSettingsSection";

export default NavigationSidebarSettingsSection;
