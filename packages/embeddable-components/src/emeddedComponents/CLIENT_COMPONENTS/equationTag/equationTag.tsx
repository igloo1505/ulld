import { Variable } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


interface EquationTagProps {
    equationId: string
}


export const EquationTag = ({ equationId }: EquationTagProps) => {
    /* PRIORITY: In order to get around using the server client on the client here and having an initially broken href, I'm not redirecting to the '/equations/equationidDetails/[equationid]' instead of '/equations/details/[databaseEquationId]'. */
    /* BUG: This new page ***needs*** to be created alongside the other equationDetails page. The only real difference should be that it accepts a different param. */
    return (
        <Link
            href={`/equations/equationIdDetails/${equationId}`}
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
