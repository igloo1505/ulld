import React, { type FC } from "react";
import { useNavSettingsForm } from "../../state/useForm";
import { maxNavbarLinks } from "../../staticSettingData";
import AddNavbarLinkFormContext from "./addNavbarLink/formContext";
import AddNavbarLinkSection from "./addNavbarLink/main";
import NavbarLinkList from "./navbarLinksList/main";

const NavbarSection: FC = () => {
    const form = useNavSettingsForm();
    const existingVals = form.watch("navbarLinks");
    return (
        <div className="w-full">
            <AddNavbarLinkFormContext>
                <AddNavbarLinkSection
                    onAddItem={(data) => {
                        if (existingVals.length < maxNavbarLinks) {
                            form.setValue("navbarLinks", [...existingVals, data]);
                        }
                    }}
                    totalItems={existingVals.length}
                />
            </AddNavbarLinkFormContext>
            <NavbarLinkList />
        </div>
    );
};

NavbarSection.displayName = "NavbarSection";

export default NavbarSection;
