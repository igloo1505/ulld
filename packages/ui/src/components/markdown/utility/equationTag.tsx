import { serverClient } from '@ulld/api'
import { getUniversalQuery } from '@ulld/state'
import { Variable } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



interface EquationTagProps {
    equationId: string
}

export const EquationTag = async ({ equationId }: EquationTagProps) => {
    const query = await getUniversalQuery("getIdFromEquationId", "equations") as typeof serverClient.equations.getIdFromEquationId
    let eqId = await query(equationId)
    if (!eqId) {
        return equationId
    }
    return (
        <Link
            href={`/equations/details/${eqId.id}`}
            className={"queryLink queryTag flex flex-row justify-center items-center gap-1 w-fit"}
        >
            <Variable className={"w-4 h-4"} />
            <span>
                {equationId}
            </span>
        </Link>
    )
}


EquationTag.displayName = "EquationTag"
