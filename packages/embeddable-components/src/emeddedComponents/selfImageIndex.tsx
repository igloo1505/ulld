import React, { useEffect, useState } from "react";
import { RootState } from "@ulld/state/store";
import { connect } from "react-redux";

const connector = connect((state: RootState, props: any) => ({
    figureIds: state.note.figureIds,
    props: props,
}));

interface SelfFigureIndexProps {
    id: string;
    figureIds: RootState["note"]["figureIds"];
}

const SelfFigureIndex = connector(({ id, figureIds }: SelfFigureIndexProps) => {
    const [imgIndex, setImgIndex] = useState<null | number>(null);

    useEffect(() => {
        if(!figureIds) return
        let idx = figureIds.indexOf(id)
        if(idx >= 0){
            setImgIndex(idx)
        }
    }, [figureIds]);

    if(typeof imgIndex !== "number") return null
    return <span>{`Figure ${imgIndex + 1}`}</span>;
});

SelfFigureIndex.displayName = "SelfFigureIndex";

export default SelfFigureIndex;
