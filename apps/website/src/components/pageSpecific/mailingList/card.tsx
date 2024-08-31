"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ulld/tailwind/form";
import { Button } from "@ulld/tailwind/button";
import { Send } from "lucide-react";
import HighlightedTextInput from "#/components/general/inputs/highlightedTextInput";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { resumeLandingTyping } from "#/lib/actions/client";

interface MailingListSignupCardProps {
    isModal?: boolean;
}

const mailingListSignupSchema = z.object({
    first: z
        .string({
            errorMap: () => ({
                message: "Required",
            }),
        })
        .min(3)
        .max(20),
    last: z
        .string({
            errorMap: () => ({
                message: "Required",
            }),
        })
        .min(3)
        .max(20),
    email: z.string().email("Enter a valid email"),
});

export const MailingListSignupCard = ({
    isModal,
    ...props
}: MailingListSignupCardProps) => {
    const form = useForm<z.infer<typeof mailingListSignupSchema>>({
        resolver: zodResolver(mailingListSignupSchema),
    });
    const router = useRouter();
    return (
        <div
            className={
                "relative w-fit px-4 py-4 flex flex-col justify-center items-start bg-popover text-popover-foreground border border-border"
            }
        >
            {isModal && (
                <XIcon
                    onClick={() => {
                        if (isModal) {
                            router.back();
                            resumeLandingTyping()
                        }
                    }}
                    className={
                        "fill-muted-foreground w-3 h-3 absolute top-4 right-4 cursor-pointer"
                    }
                />
            )}
            <h2 className={"text-2xl font-semibold"}>Welcome to ULLD</h2>
            <p className={"text-muted-foreground"}>
                Your forever free, perpetually open source second brain
            </p>
            <Form {...form}>
                <form className={"w-full space-y-4 pt-4"}>
                    <div className={"w-full grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                        <HighlightedTextInput
                            className={"w-full"}
                            name="first"
                            label="First Name"
                        />
                        <HighlightedTextInput
                            className={"w-full"}
                            name="last"
                            label="Last Name"
                        />
                    </div>
                    <HighlightedTextInput
                        label="Email"
                        name="email"
                        type="email"
                    />
                    <div className={"w-full flex flex-row justify-end items-center"}>
                        <Button className={"w-full"}>
                            Sign Up
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

MailingListSignupCard.displayName = "MailingListSignupCard";
