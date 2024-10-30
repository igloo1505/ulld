"use client";
import type { ReactNode } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import { autoWrapMath } from "@ulld/utilities/latexUtils";
import type { MdxContentSERVERProps } from "./mdxContentSERVER";
import { getMdxClassnames } from "./getMdxClassnames";

interface MdxContentClientSideProps
    extends Omit<MdxContentSERVERProps, "appConfig"> {
    stylesId?: string;
    applyUserStyles?: boolean;
    debounceTimeout?: number;
    onReady?: () => void;
}

export const MdxContentCLIENT = (
    props: MdxContentClientSideProps,
): ReactNode => {
    const memoizedValue = useMemo(() => props.content, [props.content]);

    const { setValue, Component, isReady } = useDebounceMdxParse(
        memoizedValue,
        props.debounceTimeout || 350,
        {
            bareAss: props.bareAss !== false,
        },
    );

    const [hasSetReady, setHasSetReady] = useState(false);

    useEffect(() => {
        if (!props.onReady) {
            return;
        }
        if (!hasSetReady && isReady) {
            props.onReady();
            setHasSetReady(true);
        }
        /* eslint-disable react-hooks/exhaustive-deps -- Including other deps would cause useless calls to the useEffect hook. */
    }, [Component]);

    useEffect(() => {
        if (props.content) {
            setValue(
                props.autoWrap
                    ? autoWrapMath(
                        props.content,
                        Boolean(props.inline === false || props.display),
                    )
                    : props.content,
            );
            return;
        }
        setValue("");
    }, [props.content]);

    return <Component className={getMdxClassnames(props)} />;
};

MdxContentCLIENT.displayName = "MdxContentClientSide";
