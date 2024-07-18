"use client";

import { Button } from "@ulld/tailwind/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.error(error);
    return (
        <html>
            <body
                className={
                    "prose w-full h-screen flex flex-col justify-center items-center"
                }
            >
                <h2>Something went wrong!</h2>
                <Button onClick={() => reset()}>Try again</Button>
            </body>
        </html>
    );
}
