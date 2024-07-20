"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@ulld/full-form/form";
import { Button, buttonVariants } from "@ulld/tailwind/button";
import React, { MouseEvent, ReactNode, useEffect, useMemo } from "react";
import { ZodBoolean, z } from "zod";
import {
    ConfigurationFormInput,
    ConfigurationFormOutput,
    sidebarNavItems,
    ConfigurationFormType,
} from "./staticData";
import { usePathname, useRouter } from "next/navigation";
import { Form } from "@ulld/tailwind/form";
import { appConfigSchema, AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import EvalFixModals from "./modals/evalFixModals/main";
import Link from "next/link";
import defaultBaseConfig from "@ulld/configschema/defaultConfigBase";
import { navbarButtonClasses } from "#/components/layouts/navbar/navbarButtonGroup";
import NavbarButtonPortal, {
    createDrawerCallback,
} from "#/components/utility/portals/navbar";

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
    const form = useForm<ConfigurationFormType>({
        resolver: zodResolver(appConfigSchema),
        defaultValues: defaultBaseConfig as unknown as ConfigurationFormOutput,
    });

    const router = useRouter();

    const saveForm = (values: object) => {
        if (!Object.keys(values).length) return;
        window.localStorage.setItem(localStorageKey, JSON.stringify(values));
    };

    form.watch((data) => saveForm(data));

    useEffect(() => {
        let savedValues = window.localStorage.getItem(localStorageKey);
        if (savedValues) {
            let values = JSON.parse(savedValues);
            Object.keys(values).forEach((k) => {
                form.setValue(k as keyof ConfigurationFormInput, values[k], {
                    shouldTouch: false,
                });
            });
        }
    }, []);

    const pathnameIndex = useMemo(
        () => sidebarNavItems.map((x) => x.href).indexOf(pathname),
        [pathname],
    );

    const isLast = pathnameIndex === sidebarNavItems.length - 1;
    const createFile = (
        data: AppConfigSchemaOutput,
        fileName: string = "appConfig.ulld.json",
    ) => {
        var json = JSON.stringify(data);
        let file = new File([json], fileName, { type: "application/json" });
        let exportUrl = URL.createObjectURL(file);
        const a = document.createElement("a")
        a.href = exportUrl
        a.download = file.name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(exportUrl);
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        let values = appConfigSchema.safeParse(form.getValues())
        console.log("values: ", values)
        if(values.success){
        let fileData = createFile(values.data as AppConfigSchemaOutput)
        console.log("fileData: ", fileData)
        }
    };

    const resetForm = () => {
        window.localStorage.removeItem(localStorageKey);
        form.reset();
        if (pathnameIndex !== 0) {
            router.push(sidebarNavItems[0].href);
        }
    };

    return (
        <>
            <NavbarButtonPortal>
                <a
                    role="button"
                    className={navbarButtonClasses}
                    onClick={createDrawerCallback(resetForm)}
                >
                    Reset Form
                </a>
            </NavbarButtonPortal>
            <Form {...form}>
                <form className="space-y-8">
                    {children}
                    {isLast ? (
                        <Button onClick={handleSubmit}>Submit</Button>
                    ) : (
                        <Link
                            href={sidebarNavItems[pathnameIndex + 1].href}
                            className={buttonVariants()}
                        >
                            Continue
                        </Link>
                    )}
                    <EvalFixModals />
                </form>
            </Form>
        </>
    );
};

ConfigureFormWrapper.displayName = "ConfigureFormWrapper";

export default ConfigureFormWrapper;
