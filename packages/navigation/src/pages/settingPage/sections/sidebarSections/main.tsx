import React, { Suspense } from "react";
import { useNavSettingsForm } from "../../state/useForm";
import SidebarLinkListItem from "./sidebarLinkListItem";
import { Reorder } from "framer-motion";
import { NavigationFormSettingSchema } from "../../form/schema";
import AddSidebarLinkForm from "./addSidebarLinkForm/main";
import AddSidebarLinkFormContext from "./addSidebarLinkForm/form";

interface NavigationSidebarSettingsSectionProps { }

const NavigationSidebarSettingsSection = (
    props: NavigationSidebarSettingsSectionProps,
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
                Boolean(f.label !== item.label && f.url !== item.url),
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
                />
            </AddSidebarLinkFormContext>
            <Reorder.Group
                className={
                    "not-prose w-full flex flex-col justify-center items-start mt-4"
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
