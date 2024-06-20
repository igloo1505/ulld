"use client";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@ulld/tailwind/drawer";
import React, { useState } from "react";
import { defaultSupportedThemes } from "@ulld/tailwind/defaultThemes";
import MainNavigationDrawerButtonGroup from "../layouts/drawer/buttonGroup";
import staticData from "staticContent";
import { useViewport } from "@ulld/hooks/useViewport";
import { setTheme } from "#/state/actions/dom";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { LogoAsText } from "../general/logoAsText";
import { NavbarButton, NavbarButtonClick } from "#/state/initialState/core";
import ShikiThemeSelect from "#/components/modals/shikiTheme";
import theme from "tailwindcss/defaultTheme";

interface ThemeMenuProps {
    open: boolean;
    close: () => void;
}

declare global {
    interface WindowEventMap {
        "show-theme-modal": CustomEvent;
    }
}

/* TODO: Come back and handle this on desktop screen sizes. Add the modal in and then set this to something reasonable. */
const breakpoint = 768;

const ThemeMenuDrawer = ({ open, close }: ThemeMenuProps) => {
    return (
        <Drawer
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Default Themes</DrawerTitle>
                    <DrawerDescription>
                        All of these themes are supported by default. These are{" "}
                        <span className={"font-bold italic"}>heavily</span> influenced by
                        the great work over at{" "}
                        <a
                            className={"font-bold"}
                            href={staticData.links.docs.external.shad}
                        >
                            ShadCN
                        </a>
                    </DrawerDescription>
                </DrawerHeader>
                <MainNavigationDrawerButtonGroup
                    hide={false}
                    className={"pb-4"}
                    buttons={defaultSupportedThemes
                        .map((t): NavbarButton | NavbarButtonClick => ({
                            onClick: () => {
                                setTheme(t);
                                close();
                            },
                            label: t,
                            id: t,
                        }))
                        .concat([
                            {
                                label: <LogoAsText />,
                                id: "ulld",
                                onClick: () => {
                                    setTheme("ulld");
                                    close();
                                },
                            },
                        ])}
                />
            </DrawerContent>
        </Drawer>
    );
};

const ThemeMenuModal = ({ open, close }: ThemeMenuProps) => {
    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen) {
            close();
        }
    };
    return (
        <ShikiThemeSelect
            {...theme}
            open={open}
            onOpenChange={handleOpenChange}
            onChange={(newValue) => {
                setTheme(newValue)
                close()
            }}
        />
    );
};

const ThemeMenu = () => {
    const [open, setOpen] = useState(false);
    const vp = useViewport();
    useEventListener("show-theme-modal", () => setOpen(true));
    return Boolean(vp && vp.window.width > breakpoint) ? (
        <ThemeMenuModal open={open} close={() => setOpen(false)} />
    ) : (
        <ThemeMenuDrawer open={open} close={() => setOpen(false)} />
    );
};

ThemeMenu.displayName = "ThemeMenu";

export default ThemeMenu;
