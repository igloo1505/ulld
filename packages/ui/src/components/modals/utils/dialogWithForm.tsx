"use client";
import React from "react";
import {
    FieldValues,
    SubmitHandler,
    UseFormReturn,
} from "@ulld/full-form/form";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import { buttonVariants } from "@ulld/tailwind/button";
import { Form } from "@ulld/tailwind/form";

interface DialogWithFormProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    open: boolean;
    title: string;
    desc?: string;
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
    btnLabel?: string;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    isModal?: boolean;
    grow?: boolean;
    withButtons?: boolean;
}

export const DialogWithForm = <T extends FieldValues>({
    children,
    grow,
    onOpenChange,
    form,
    open,
    title,
    desc,
    isModal,
    onSubmit,
    btnLabel,
    className,
    withButtons,
}: DialogWithFormProps<T>) => {
    const router = useRouter();
    return (
        <Dialog
            open={open}
            onOpenChange={
                onOpenChange
                    ? onOpenChange
                    : (o) => {
                        if (isModal && !o) {
                            router.back();
                        }
                    }
            }
        >
            <DialogContent
                className={clsx(
                    "max-w-[90vw] mdlg:max-w-screen-md",
                    !grow && "w-fit md:w-fit",
                )}
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {desc && <DialogDescription>{desc}</DialogDescription>}
                </DialogHeader>
                <div className="w-full h-fit py-4">
                    <Form {...form}>
                        <form className={clsx("space-y-6 w-full", className)}>
                            {children}
                        </form>
                    </Form>
                </div>
                {withButtons !== false && (
                    <DialogFooter>
                        <a
                            role="button"
                            className={buttonVariants()}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onSubmit(form.getValues());
                            }}
                        >
                            {btnLabel || "Save"}
                        </a>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};

DialogWithForm.displayName = "DialogWithForm";
