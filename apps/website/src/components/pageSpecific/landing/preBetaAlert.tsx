"use client"
import { LogoAsText } from "#/components/general/logoAsText";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
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
                        Under normal circumstances, this website would remain down while it's under active development. Because of some <span className={"italic"}>less common</span> circumstances, I've decided to host this website publicly before it's ready for public use. Feel free to explore, but expect quite a bit of the intended functionality to be non-functional for now. This website should be complete by the beginning of June, and <LogoAsText fontSize={13}/> will be ready for public use by mid-summer.
                        </div>
                        <div className={"mt-2"}>
                    You can learn more about the motivation and plans for <LogoAsText fontSize={13} /> <a href={staticContent.links.blog.ulldPreBetaLaunch} className={"text-link"}>here</a>.
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

PreBetaAlertDialog.displayName = "PreBetaAlertDialog";

export default PreBetaAlertDialog;
