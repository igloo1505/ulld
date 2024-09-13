"use client"
import { LogoAsText } from "#/components/general/logoAsText";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import Link from "next/link"
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
import staticContent from "staticContent"

const storageKey = "has-shown-pre-beta-alert"


const PreBetaAlertDialog = () => {
    const timer = useRef<NodeJS.Timeout | null>(null)
    const [hasShown, setHasShown] = useLocalStorage(storageKey, false)
    const [show, setShow] = useState(false)
    useEffect(() => {
       if(!hasShown){
            timer.current = setTimeout(() => {
            setShow(true)
            setHasShown(true)
            }, 10000)
        } else {
            if(timer.current){
                clearTimeout(timer.current)
            }
        }
    }, [hasShown])
    return (
        <AlertDialog 
            open={show}
            onOpenChange={() => {
            if(timer.current){
                    clearTimeout(timer.current)
                }
            setShow(false)
            }}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>This app is in pre-release.</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div>
                        <LogoAsText fontSize={13}/> is still in the very early stages of the initial release. Wrapping up the missing pieces and creating a simpler installation process would normally be a pretty simple and straight forward task, but my current living situation is complicating things <span className={"font-semibold italic"}>significantly</span>.
                        </div>
                        <div className={"mt-2"}>
                        You can learn more about the motivation and plans for <LogoAsText fontSize={13} /> <Link href={staticContent.links.blog.ulldPreBetaLaunch} className={"text-link"}>here</Link>, and more about the atypical release of <LogoAsText fontSize={13} /> <a href={staticContent.links.blog.whyILeftWork} className={"text-link"}>here</a>, and if you like what you see, you can support the development of <LogoAsText fontSize={13} /> by clicking <Link 
                                href={"/sponsor"}
                                className={"text-link"}
                            >here</Link>.
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
