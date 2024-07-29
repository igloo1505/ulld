"use client";
import { client } from "@ulld/api/client";
import { Variable } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface EquationTagProps {
    equationId: string;
}

export const EquationTag = ({ equationId }: EquationTagProps) => {
    const [equationDatabaseId, setEquationDatabaseId] = useState<number>(-1);

    const gatherHumanReadableEquationId = async (eqId: string) => {
        let res = await client.equations.getIdFromEquationId.query(eqId);
        if (res?.id) {
            setEquationDatabaseId(res.id);
        }
    };

    useEffect(() => {
        gatherHumanReadableEquationId(equationId);
    }, [equationId]);

    return (
        <Link
            href={`/equations/details/${equationDatabaseId}`}
            className={
                "queryLink queryTag flex flex-row justify-center items-center gap-1 w-fit"
            }
        >
            <Variable className={"w-4 h-4"} />
            <span>{equationId}</span>
        </Link>
    );
};

EquationTag.displayName = "EquationTag";
