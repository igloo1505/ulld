"use client";
import { useLockBodyScroll } from "@ulld/hooks/useLockScroll";
import { useRouter } from "next/navigation";
import React, {
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import ConfirmModalPageClose from "./confirmModalPageClose";
import { editorSaveKeydown } from "@ulld/hooks/useEditorSaveListener";

interface ModalPageContainerProps {
    children: React.ReactNode;
    confirmClose?: boolean;
    closeEvent?: string;
}

/* DOCUMENT: document the keyboard shortcut to close the modal page from the confirmation menu. */
export const ModalPageContainer = ({
    children,
    confirmClose,
    closeEvent,
}: ModalPageContainerProps) => {
    const router = useRouter();
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const [confirmCloseOpen, setConfirmCloseOpen] = useState(false);

    const animateIn = () => {
        if (!wrapper.current) return;
        wrapper.current.style.scale = `1`;
        wrapper.current.style.transform = `translate(-50%, -50%)`;
        wrapper.current.style.opacity = `1`;
    };

    useEffect(() => {
        animateIn();
    }, []);

    const [locked, setLocked] = useLockBodyScroll(true);

    const onDismiss = useCallback(() => {
        if (closeEvent) {
            let evt = new Event(closeEvent);
            window?.dispatchEvent(evt);
        }
        setLocked(false);
        router.back();
    }, [router, setLocked]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper],
    );

    const handleDismiss = () => {
        if (confirmClose) {
            setConfirmCloseOpen(true);
        } else {
            onDismiss();
        }
    };
    const onKeyDown = editorSaveKeydown(handleDismiss, [onDismiss]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            setLocked(false);
        };
    }, [onKeyDown]);

    return (
        <>
            <ConfirmModalPageClose
                open={confirmCloseOpen}
                cancel={() => setConfirmCloseOpen(false)}
                closeModalPage={onDismiss}
            />
            <div
                ref={overlay}
                className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 z-[9999]"
                onClick={onClick}
            >
                <div
                    ref={wrapper}
                    className="absolute relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] w-full p-6 flex flex-col justify-center items-center scale-0 opacity-0 transition-all duration-300"
                >
                    {children}
                </div>
            </div>
        </>
    );
};

ModalPageContainer.displayName = "ModalPageContainer";
