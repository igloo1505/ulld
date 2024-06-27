"use client"
import { useEffect, useState } from "react";
import { RootState } from "@ulld/state/store";
import { connect } from "react-redux";

const connector = connect((state: RootState, props: any) => ({
    figures: state.note.figureIds || [],
    props: props,
}));

interface FigureRefProps {
    id: string;
    figures: RootState["note"]["figureIds"];
}

export const FigureRef = connector(({ figures, id }: FigureRefProps) => {
    const [figureIndex, setFigureIndex] = useState<number | null>(null);
    useEffect(() => {
        if (!figures) return;
        let idx = figures.indexOf(id);
        if(idx >= 0){
            setFigureIndex(idx + 1)
        }
    }, [figures]);

    return figureIndex;
});

FigureRef.displayName = "FigureRef";
