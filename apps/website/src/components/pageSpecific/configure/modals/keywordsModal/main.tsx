import React, { ReactNode } from "react";
import { Button } from "@ulld/tailwind/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import { z } from "zod";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ulld/tailwind/form";
import { TextInputWithBadgeList } from "@ulld/full-form/textInputWithBadgeList";

interface KeywordsModalProps {
    open: boolean;
    onAccept: () => void;
    defaultValues: string[];
    label?: ReactNode;
    desc?: ReactNode;
    close: () => void
}

const schema = z.object({
    keywords: z.string().array().default([]),
});

const KeywordsModal = ({
    open,
    onAccept,
    label,
    desc,
    close,
    defaultValues = [],
}: KeywordsModalProps) => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { keywords: defaultValues },
    });

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent className={"lg:w-fit lg:max-w-[90vw]"}>
                <DialogHeader>
                    <DialogTitle>{label || "Keywords"}</DialogTitle>
                    {desc && <DialogDescription>{desc}</DialogDescription>}
                </DialogHeader>
                <Form {...form}>
                    <form className={"w-full space-y-6"}>
                        <TextInputWithBadgeList
                            name="keywords"
                            classes={{
                                input: "w-full",
                                formItem: "w-full",
                            }}
                        />
                        <DialogFooter
                            className={"w-full flex flex-row justify-end items-center"}
                        >
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onAccept();
                                }}
                            >
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

KeywordsModal.displayName = "KeywordsModal";

export default KeywordsModal;
