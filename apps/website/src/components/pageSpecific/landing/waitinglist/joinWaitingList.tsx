"use client";
import { LogoAsText } from "#/components/general/logoAsText";
import React from "react";
import { BackgroundBeams } from "./beams";
import { z } from "zod";
import HighlightedTextInput from "#/components/general/inputs/highlightedTextInput";
import { useForm } from "@ulld/full-form/form";
import { Form } from "@ulld/tailwind/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "#/trpc/main";
import { onEnter } from "@ulld/state/listeners/keydown";
import { useToast } from "@ulld/tailwind/use-toast";

interface JoinWaitingListProps { }

const schema = z.object({
    email: z.string().email("Please enter a valid email."),
});

const JoinWaitingList = (props: JoinWaitingListProps) => {
    const { toast } = useToast()
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
        form.reset()
        if (res === "exists") {
            toast({
                title: "Woah",
                description: (
                    <span>
                        While I appreciate your enthusiasm, you are already on the waiting list.
                    </span>
                ),
            })
            return
        }
        if (res) {
            toast({
                title: "You're in!",
                description: (
                    <span>
                        Thank for your interest in <LogoAsText fontSize={13} />. You'll be
                        among the first to know when a public beta is available.
                    </span>
                ),
            })
        }
    };
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 z-10">
                <h1 className="relative z-10 text-[9vw] md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Join the waitlist
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to <LogoAsText fontSize={13} />, the note
                    taking software tailored to meet the needs of modern students and
                    academics, from grade school to post-doc. Sign up to receive emails regarding the release date of <LogoAsText fontSize={13} /> and to hear about new features as they're added.
                </p>
                <Form
                    {...form}
                >
                    <form className={"w-full flex flex-col justify-center items-center mt-6"}>
                        <HighlightedTextInput
                            name="email"
                            placeholder="allenTuring@gmail.com"
                            onKeyDown={(e) => onEnter(e, onSubmit, "onEnter")}
                            className={"z-10"}
                            containerClasses="w-full"
                            formItemClasses="w-full sm:w-[80%]"
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
