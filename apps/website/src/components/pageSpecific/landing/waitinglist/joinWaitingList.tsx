"use client";
import { LogoAsText } from "#/components/general/logoAsText";
import React, { useState } from "react";
import { BackgroundBeams } from "./beams";
import { z } from "zod";
import HighlightedTextInput from "#/components/general/inputs/highlightedTextInput";
import { useForm } from "@ulld/full-form/form";
import { Form } from "@ulld/tailwind/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "#/trpc/main";
import store from "#/state/store";
import { showToast } from "@ulld/state/slices/ui";
import { onEnter } from "@ulld/state/listeners/keydown";

interface JoinWaitingListProps { }

const schema = z.object({
    email: z.string().email("Please enter a valid email."),
});

const JoinWaitingList = (props: JoinWaitingListProps) => {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async () => {
        let res = await client.contacts.submitWaitlistRequest.mutate(
            form.getValues().email,
        );
        if (res) {
            store.dispatch(
                showToast({
                    title: "You're in!",
                    description: (
                        <span>
                            Thank for your interest in <LogoAsText fontSize={13} />. You'll be
                            among the first to know when a public beta is available.
                        </span>
                    ),
                }),
            );
        }
    };
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 z-10">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Join the waitlist
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Sign up to receive emails regarding the release date of <LogoAsText fontSize={13}/>
                    , new features as they're added, Welcome to <LogoAsText fontSize={13}/>, the note
                    taking software tailored to meet the needs of modern students and
                    academics, from grade school to post-doc.
                </p>
                <Form {...form}>
                    <form className={"w-full flex flex-col justify-center items-center mt-6"}>
                        <HighlightedTextInput
                            name="email"
                            placeholder="allenTuring@gmail.com"
                            onKeyDown={(e) => onEnter(e, onSubmit)}
                            className={"z-10"}
                            containerClasses="w-full md:px-6"
                        /* className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" */
                        />
                    </form>
                </Form>
            </div>
            <BackgroundBeams />
        </div>
    );
};

JoinWaitingList.displayName = "JoinWaitingList";

export default JoinWaitingList;
