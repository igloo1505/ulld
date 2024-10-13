import { useForm, zodResolver } from "@ulld/full-form/form";
import React, { ReactNode } from "react";
import { navbarLinkSchema } from "../../../form/schema";
import { Form } from "@ulld/tailwind/form";

interface AddNavbarLinkFormContextProps {
    children: ReactNode;
}

const AddNavbarLinkFormContext = ({
    children,
}: AddNavbarLinkFormContextProps) => {
    const form = useForm({
        resolver: zodResolver(navbarLinkSchema),
    });

    return <Form {...form}>{children}</Form>;
};

AddNavbarLinkFormContext.displayName = "AddNavbarLinkFormContext";

export default AddNavbarLinkFormContext;
