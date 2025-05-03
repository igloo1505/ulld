"use client";
import { LogoAsText } from "#/components/general/logoAsText";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@ulld/tailwind/alert-dialog";
import React, { useEffect, useRef, useState } from "react";
import staticContent from "staticContent";

const storageKey = "has-shown-pre-beta-alert";

const PreBetaAlertDialog = () => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [hasShown, setHasShown] = useLocalStorage(storageKey, false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (!hasShown) {
            timer.current = setTimeout(() => {
                setShow(true);
                setHasShown(true);
            }, 10000);
        } else {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        }
    }, [hasShown]);
    return (
        <AlertDialog
            open={show}
            onOpenChange={() => {
                if (timer.current) {
                    clearTimeout(timer.current);
                }
                setShow(false);
            }}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        This app is currently being rewritten with Flutter and Rust.
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="text-red">
                            You should <span className="font-bold font-italic">not</span> try
                            to install this application in it's current form.
                        </div>
                        <p>
                            The web application was abondoned and this application is now
                            being rewrittin in Flutter and Rust to incorporate all of the same
                            features in a native application with ummatched performance. While
                            this release won't be ready until early fall, there is already
                            Rust powered plot generators, native, decentrialized peer-to-peer
                            communication and more.
                        </p>
                        <p>
                            The new app will be amazing, but don't even bother trying to
                            install this web app. It was an estimated 1.8 million lines of
                            code according to some software, but it became so over engineered
                            that a complete rewrite was what's best in the long run. You can
                            expect a beta by the end of July, maybe June if there aren't too
                            many hickups.
                        </p>
                        <div className={"mt-2"}>
                            You can learn more about the motivation and plans for{" "}
                            <LogoAsText fontSize={13} />{" "}
                            <Link
                                href={staticContent.links.blog.ulldPreBetaLaunch}
                                className={"text-link"}
                            >
                                here
                            </Link>
                            , and more about the atypical release of{" "}
                            <LogoAsText fontSize={13} />{" "}
                            <a
                                href={staticContent.links.blog.whyILeftWork}
                                className={"text-link"}
                            >
                                here
                            </a>
                            .{" "}
                        </div>
                        <div className={"mt-2"}>
                            If you you can, please consider supporting the development of{" "}
                            <LogoAsText fontSize={13} /> by clicking{" "}
                            <Link href={"/sponsor"} className={"text-link"}>
                                here
                            </Link>
                            .
                        </div>
                        <div className={"mt-2"}>
                            I am still <span className="italic font-bold">very</span>{" "}
                            homeless. Your support towards finalizing the initial release of{" "}
                            <LogoAsText /> and continued research into the model that inspired
                            it goes further than you know.
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

PreBetaAlertDialog.displayName = "PreBetaAlertDialog";

export default PreBetaAlertDialog;
