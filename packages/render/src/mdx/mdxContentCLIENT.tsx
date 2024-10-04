"use client";
import React, { useEffect, useMemo, useState } from "react";
import type { MdxContentSERVERProps } from "./mdxContentSERVER";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import { autoWrapMath } from "@ulld/utilities/latexUtils";
import { getMdxClassnames } from "./getMdxClassnames";

interface MdxContentClientSideProps
    extends Omit<MdxContentSERVERProps, "appConfig"> {
    stylesId?: string;
    applyUserStyles?: boolean;
    debounceTimeout?: number;
    onReady?: () => void;
}

export const MdxContentCLIENT = (props: MdxContentClientSideProps) => {
    let memoizedValue = useMemo(() => props.content, [props.content]);

    const { value, setValue, Component, isReady } = useDebounceMdxParse(
        memoizedValue,
        props.debounceTimeout || 350,
        {
            bareAss: props.bareAss === false ? false : true,
        },
    );

    const [hasSetReady, setHasSetReady] = useState(false);

    useEffect(() => {
        if (!props.onReady) {
            return;
        }
        if (!hasSetReady && isReady && props.onReady) {
            props.onReady();
            setHasSetReady(true);
        }
    }, [Component]);

    useEffect(() => {
        setValue(
            props.content
                ? props.autoWrap
                    ? autoWrapMath(
                        props.content,
                        Boolean(props.inline === false || props.display),
                    )
                    : props.content
                : "",
        );
    }, [props.content]);

    return <Component className={getMdxClassnames(props)} />;
};

MdxContentCLIENT.displayName = "MdxContentClientSide";
