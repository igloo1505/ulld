"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import React, { ReactNode, useEffect } from "react";
import { ZodBoolean, z } from "zod";
import { configurationFormSchema, sidebarNavItems } from "./staticData";
import { usePathname } from "next/navigation";
import { Form } from "@ulld/tailwind/form";

interface ConfigureFormWrapperProps {
    children: ReactNode;
}

const localStorageKey = "ULLD-configuration-form";

let completedObject = {} as {
    [k in (typeof sidebarNavItems)[number]["id"]]: ZodBoolean;
};
let completedInitial = {} as {
    [k in (typeof sidebarNavItems)[number]["id"]]: boolean;
};

for (const k of sidebarNavItems) {
    completedObject[k.id] = z.boolean();
    completedInitial[k.id] = false;
}

const ConfigureFormWrapper = ({ children }: ConfigureFormWrapperProps) => {
    const pathname = usePathname();
    const form = useForm({
        resolver: zodResolver(configurationFormSchema),
        defaultValues: {
            noteTypes: [],
            completed: completedInitial,
        },
    });

    const saveForm = (
        values: Partial<z.output<typeof configurationFormSchema>>,
    ) => {
        window.localStorage.setItem(localStorageKey, JSON.stringify(values));
    };

    form.watch((formState) => {
        console.log("formState: ", formState);
        /* saveForm(formState) */
    });

    useEffect(() => {
        let savedValues = window.localStorage.getItem(localStorageKey);
        if (savedValues) {
            let values = JSON.parse(savedValues);
            Object.keys(values).forEach((k) => {
                form.setValue(
                    k as keyof z.input<typeof configurationFormSchema>,
                    values[k],
                    { shouldTouch: false },
                );
            });
        }
    }, []);

    const isLast = pathname === sidebarNavItems[sidebarNavItems.length - 1].href;

    return (
        <Form {...form}>
            <form className="space-y-8">
                {children}
                <Button>{isLast ? "Submit" : "Continue"}</Button>
            </form>
        </Form>
    );
};

ConfigureFormWrapper.displayName = "ConfigureFormWrapper";

export default ConfigureFormWrapper;
