import React, {type ReactNode, type FC } from "react";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
import { type SidebarLink, sidebarLinkSchema } from "../../../form/schema";

interface AddSidebarLinkFormProps {
    children: ReactNode;
}

const AddSidebarLinkFormContext: FC<AddSidebarLinkFormProps> = ({ children }) => {
    const form = useForm<SidebarLink>({
        resolver: zodResolver(sidebarLinkSchema),
        defaultValues: {
            icon: validIconNameList[0],
            label: "",
            value: "",
            position: "top"
        }
    });
    return <Form {...form}>{children}</Form>;
};

AddSidebarLinkFormContext.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkFormContext;

