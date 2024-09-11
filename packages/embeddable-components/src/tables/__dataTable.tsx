import React from 'react'
import path from 'path'
import fs from 'fs'
import { ParsedAppConfig } from '@ulld/configschema/types'
import { TabularDataHandler, getFilepath} from "@ulld/api/classes/data/tabularParser"
import { readAppConfigSync } from '@ulld/developer/readAppConfig'


interface DataTableProps {
    file: string
}


// TODO: This still needs to be handled entirely. Passing on this for now to handle gltf bug.
const DataTable = ({ file }: DataTableProps, _config?: ParsedAppConfig) => {
    const config = _config || readAppConfigSync()
    const fp = path.join(config.fsRoot, `${getFilepath(file)}/${file}`)
    const b = fs.readFileSync(fp, {
        encoding: "utf-8"
    })
    /* TODO: Handle embedded datatable here. */
    const manager = new TabularDataHandler(b, file)
    return (
        <div></div>
    )
}


DataTable.displayName = "DataTable"


export default DataTable;
