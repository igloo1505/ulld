import React, { type FC, type ReactNode } from "react";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { navbarLinkSchema } from "../../../form/schema";

interface AddNavbarLinkFormContextProps {
    children: ReactNode;
}

const AddNavbarLinkFormContext: FC<AddNavbarLinkFormContextProps> = ({
    children,
}) => {
    const form = useForm({
        resolver: zodResolver(navbarLinkSchema),
        defaultValues: {
            label: "",
            value: ""
        }
    });

    return <Form {...form}>{children}</Form>;
};

AddNavbarLinkFormContext.displayName = "AddNavbarLinkFormContext";

export default AddNavbarLinkFormContext;
