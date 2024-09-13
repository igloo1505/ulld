"use client";
import { Label } from "@ulld/tailwind/label";
import React from "react";
import Link from "next/link";
import CopyTextContainer from "../../copyTextContainer/main";
import staticContent from "staticContent";
import { PatreonIcon } from "@ulld/icons/patreon";
import GithubIcon from "@ulld/icons/github";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter,
    DialogPortal,
} from "@ulld/tailwind/dialog";
import store, { RootState } from "#/state/store";
import { connect, useDispatch } from "react-redux";
import { showContactMeModal } from "#/state/slices/interactions";
import { NotepadText } from "lucide-react";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@ulld/tailwind/tooltip";

const connector = connect((state: RootState, props: any) => ({
    open: state.interactions.modals.contactMe,
    props: props,
}));

interface ContactMeCardProps {
    isModal?: boolean;
    open: boolean;
}

const ContactMeDialog = connector(({ open }: ContactMeCardProps) => {
    const closeContactModal = () => {
        store.dispatch(showContactMeModal(false));
    };
    return (
        <Dialog
            open={open}
            onOpenChange={(o) => {
                if (!o) {
                    store.dispatch(showContactMeModal(false));
                }
            }}
        >
            <DialogPortal>
                <DialogContent className={"w-[350px]"}>
                    <DialogHeader>
                        <DialogTitle>Contact Me</DialogTitle>
                        <DialogDescription>
                            I will do my best to respond to all emails.
                        </DialogDescription>
                    </DialogHeader>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="contact-email">Email</Label>
                                <CopyTextContainer
                                    id="contact-email"
                                    toastDescription={
                                        "My email has been copied to your clipboard."
                                    }
                                    className={"text-sm"}
                                >
                                    {staticContent.contact.email}
                                </CopyTextContainer>
                            </div>
                        </div>
                    </form>
                    <DialogFooter
                        className={"flex flex-row justify-end items-center gap-4"}
                    >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link 
                                        href={"/resume"}
                                        onClick={closeContactModal}
                                    >
                                        <NotepadText className={"w-6 h-6 text-foreground"} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>My Resume</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <a
                            href={staticContent.links.fund.patreon}
                            onClick={closeContactModal}
                        >
                            <PatreonIcon className={"w-6 h-6 fill-foreground"} />
                        </a>
                        <a
                            href={staticContent.links.fund.github}
                            onClick={closeContactModal}
                        >
                            <GithubIcon className={"w-6 h-6"} />
                        </a>
                    </DialogFooter>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
});

ContactMeDialog.displayName = "ContactMeDialog";

export default ContactMeDialog;
