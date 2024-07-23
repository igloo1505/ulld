"use client";
import React from "react";
import {
    Drawer,
    DrawerClose,
    DrawerTitle,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerDescription,
} from "@ulld/tailwind/drawer";
import store, { RootState } from "#/state/store";
import { connect } from "react-redux";
import staticContent from "staticContent";
import { useViewport } from "@ulld/hooks/useViewport";
import MainNavigationDrawerButtonGroup from "./buttonGroup";
import { closeDrawer } from "#/state/slices/core";

const connector = connect((state: RootState, props: any) => ({
    drawer: state.core.drawer,
    buttons: state.core.navbarButtons,
    props: props,
}));

interface MainNavigationDrawerProps {
    buttons: RootState["core"]["navbarButtons"];
    drawer: RootState["core"]["drawer"];
}

const MainNavigationDrawer = connector(
    ({ buttons, drawer }: MainNavigationDrawerProps) => {
        let vp = useViewport();
        return (
            <Drawer
                open={drawer.open}
                onOpenChange={(newOpen) => {
                    if (!newOpen) {
                        store.dispatch(closeDrawer());
                    }
                }}
            >
                <DrawerContent className={"focus-visible:outline-none"}>
                    <DrawerHeader>
                        {drawer.title && <DrawerTitle>{drawer.title}</DrawerTitle>}
                        <DrawerDescription>{staticContent.description}</DrawerDescription>
                    </DrawerHeader>
                    <MainNavigationDrawerButtonGroup
                        hide={!vp || vp.window.width >= drawer.breakpoint}
                        buttons={buttons}
                    />
                </DrawerContent>
            </Drawer>
        );
    },
);

MainNavigationDrawer.displayName = "MainNavigationDrawer";

export default MainNavigationDrawer;
