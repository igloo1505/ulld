import { useForm, zodResolver } from "@ulld/full-form/form";
import { Form } from "@ulld/tailwind/form";
import React, { ReactNode } from "react";
import { SidebarLink, sidebarLinkSchema } from "../../../form/schema";

interface AddSidebarLinkFormProps {
    children: ReactNode;
}

const AddSidebarLinkFormContext = ({ children }: AddSidebarLinkFormProps) => {
    const form = useForm<SidebarLink>({
        resolver: zodResolver(sidebarLinkSchema),
    });
    return <Form {...form}>{children}</Form>;
};

AddSidebarLinkFormContext.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkFormContext;

