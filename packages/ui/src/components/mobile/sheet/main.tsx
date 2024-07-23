"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, useDragControls, useMotionValue, useVelocity } from "framer-motion";
import { useLockBodyScroll } from "@ulld/hooks/useLockScroll";
import cn from "@ulld/utilities/cn";
import {
    MobileSheetProvider,
    useMobileSheetContext,
    useMobileSheetDispatch,
} from "./sheetProvider";
import { MobileSheetBackdrop } from "./sheetBackdrop";
export * from "./sheetTitle";
export * from "./sheetHeader";
export * from "./sheetContent";
export * from "./sheetDesc";
export * from "./sheetPortal";
export * from "./sheetFooter"


interface MobileSheetProps {
    open: boolean;
    children: ReactNode;
    onOpenChange?: (newOpen: boolean) => void;
    className?: string;
    /** @default 80 */
    dragCloseVelocity?: number
    classes?: {
        backdrop?: string;
    };
}


const _MobileSheet = ({
    open,
    children,
    className,
    onOpenChange,
    classes,
    dragCloseVelocity = 80
}: MobileSheetProps) => {
    const [locked, setLocked] = useLockBodyScroll(open);
    const state = useMobileSheetContext();
    const dispatch = useMobileSheetDispatch();
    const controls = useDragControls()

    useEffect(() => {
       dispatch({
            type: "setDragControls",
            payload: controls
        }) 
    }, [])

    useEffect(() => {
        setLocked(open);
        dispatch({
            type: "setOpen",
            payload: open,
        });
    }, [open]);

    useEffect(() => {
        if (onOpenChange) {
            onOpenChange(state.open);
        }
    }, [state]);

    const y = useMotionValue(0)

    const yVelocity = useVelocity(y)

    yVelocity.onChange((yVel) => {
        if(yVel <= -dragCloseVelocity){
            dispatch({
                type: "close"
            })
        }
    })

    if(!state.controls) return null

    return (
        <>
            <MobileSheetBackdrop className={classes?.backdrop} />
            <motion.div
                className={cn(
                    "fixed bottom-0 w-screen bg-background z-10 max-h-screen flex flex-col rounded-tl-lg rounded-tr-lg border-t",
                    className,
                )}
                initial={"hidden"}
                animate={open ? "show" : "hidden"}
                style={{y}}
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 0
                }}
                dragElastic={{
                    top: 0,
                    bottom: 0.3
                }}
                dragListener={false}
                dragControls={state.controls || undefined}
                variants={{
                    show: {
                        height: "fit-content",
                        maxHeight: "100vh",
                    },
                    hidden: {
                        height: "0px",
                    },
                }}
            >
                {children}
            </motion.div>
        </>
    );
};

export const MobileSheet = (props: MobileSheetProps) => {
    return (
        <MobileSheetProvider>
            <_MobileSheet {...props} />
        </MobileSheetProvider>
    );
};

MobileSheet.displayName = "MobileSheet";
