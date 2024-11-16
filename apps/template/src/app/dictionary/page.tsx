import { serverClient } from "#/trpc/mainServer";
import React from "react";
import {
    DictionaryDefinitionReturnType,
    LetterType,
} from "@ulld/utilities/types";
import { getFirstLetterWithLatex } from "@ulld/utilities/searchUtils";
import DictionaryLetterList from "#/components/slots/dictionary/dictionaryLetterList";
import DictionaryItem from "#/components/slots/dictionary/dictionaryItem";
import { sortAlphabetical } from "@ulld/utilities/sortUtils";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

type DefinitionListType = Awaited<
    ReturnType<typeof serverClient.search.getDefinitionList>
>;

interface DictionaryPageTemplateProps {
    searchParams: {
        page?: string;
    };
}

const letters: LetterType[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "number",
];

const DictionaryPageTemplate = async ({
    searchParams: { page: _page },
}: DictionaryPageTemplateProps) => {
    const definitions = await serverClient.search.getDefinitionList();
    const page =
        typeof _page !== "undefined"
            ? _page
            : definitions.length > 20
                ? "a"
                : "all";

    let letterMap: Record<LetterType, DefinitionListType> = {
        number: [],
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
    };

    definitions.forEach((d) => {
        let fl = getFirstLetterWithLatex(d.label || d.id);
        if (d !== null && fl in letterMap) {
            letterMap[fl as LetterType].push(d);
        }
    });

    return letters.map((letter) => {
        return (
            <>
                <DisableBookmark />
                <DictionaryLetterList
                    letter={letter}
                    currentPage={page ? parseInt(page) : 1}
                >
                    {sortAlphabetical<(typeof definitions)[number]>(
                        letterMap[letter as keyof typeof letterMap],
                        (d) => d.label || d.id,
                    ).map((item, i) => {
                        return (
                            <DictionaryItem
                                key={`dictionary-item-${letter}-${i}`}
                                {...item}
                            />
                        );
                    })}
                </DictionaryLetterList>
            </>
        );
    });
};

DictionaryPageTemplate.displayName = "DictionaryPageTemplate";

export default DictionaryPageTemplate;
