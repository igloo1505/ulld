"use client";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@ulld/tailwind/drawer";
import { useMediaQuery } from "react-responsive";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@ulld/tailwind/select";
import React, { useState } from "react";
import { defaultSupportedThemes } from "@ulld/tailwind/defaultThemes";
import MainNavigationDrawerButtonGroup from "../layouts/drawer/buttonGroup";
import staticData from "staticContent";
import { setTheme } from "#/state/actions/dom";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { LogoAsText } from "../general/logoAsText";
import { NavbarButton, NavbarButtonClick } from "#/state/initialState/core";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@ulld/tailwind/dialog";

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
                    noExtraLinks
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
    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Change Theme</DialogTitle>
                    <DialogDescription>
                        Change the theme on the website to one of the default supported
                        themes. Note however, that this website was not designed to support
                        these themes the way the compiled app was.
                    </DialogDescription>
                </DialogHeader>
                <div className="p-8 flex flex-col justify-center items-center">
                    <Select
                        onValueChange={(newTheme) => {
                            setTheme(newTheme);
                            close();
                        }}
                    >
                        <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Themes</SelectLabel>
                                {defaultSupportedThemes.map((o) => {
                                    return (
                                        <SelectItem
                                            key={o}
                                            value={o}
                                            onClick={() => {
                                                setTheme(o);
                                                close();
                                            }}
                                        >
                                            {o}
                                        </SelectItem>
                                    );
                                })}
                                        <SelectItem
                                            key={"ulld"}
                                            value={"ulld"}
                                            onClick={() => {
                                                setTheme("ulld");
                                                close();
                                            }}
                                        >
                                            Ulld
                                        </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const ThemeMenu = () => {
    const [open, setOpen] = useState(false);
    const isModal = useMediaQuery({ minWidth: breakpoint });
    useEventListener("show-theme-modal", () => setOpen(true));

    return isModal ? (
        <ThemeMenuModal open={open} close={() => setOpen(false)} />
    ) : (
        <ThemeMenuDrawer open={open} close={() => setOpen(false)} />
    );
};

ThemeMenu.displayName = "ThemeMenu";

export default ThemeMenu;
