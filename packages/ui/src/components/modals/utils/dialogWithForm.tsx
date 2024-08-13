"use client";
import React, { ReactNode } from "react";
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
import cn from "@ulld/utilities/cn";

export interface DialogWithFormProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    open: boolean;
    title: ReactNode;
    desc?: ReactNode;
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
    btnLabel?: string;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    isModal?: boolean;
    grow?: boolean;
    withButtons?: boolean;
    classes?: {
        container?: string
        innerContainer?: string
        title?: string
        body?: string
        description?: string
        footer?: string
    }
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
    classes={}
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
                className={cn(
                    "max-w-[90vw] mdlg:max-w-screen-md",
                    !grow && "w-fit md:w-fit",
                    classes.container
                )}
            >
                <DialogHeader>
                    <DialogTitle className={classes.title}>{title}</DialogTitle>
                    {desc && <DialogDescription className={classes.description}>{desc}</DialogDescription>}
                </DialogHeader>
                <div className={cn("w-full h-fit py-4", classes.innerContainer)}>
                    <Form {...form}>
                        <form className={clsx("space-y-6 w-full", className)}>
                            {children}
                        </form>
                    </Form>
                </div>
                {withButtons !== false && (
                    <DialogFooter className={classes.footer}>
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
