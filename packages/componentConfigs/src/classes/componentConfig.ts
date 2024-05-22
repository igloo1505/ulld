import { z } from "zod";
import { ComponentCategories, FieldType, componentNames } from "../types";
import { ReactNode } from "react";

interface BaseComponentConfigProps {
    zod: z.ZodAny;
    component: componentNames;
    aliases?: string[];
    note?: ReactNode;
    description?: ReactNode;
    category: ComponentCategories;
    subCategories?: ComponentCategories[];
}

interface Field {
    type: FieldType[];
}

const item = z.object({
    id: z.number().int().min(2),
    itemName: z.string(),
    unionField: z.union([z.string(), z.number()]),
})

export class ComponentConfig {
    fields: Field[];
    constructor(public config: BaseComponentConfigProps) {
        this.gatherFields();
    }

    parseField(fieldData: any){
    }

    gatherFields() {
        // const zod = this.config.zod
        const zod = item
        if (!this.config.description) {
            this.config.description = zod._def.description;
        }
        console.log(zod._input.unionField)
        let shape = zod._def.shape()
        let itemData = {}
        for (const s in shape){
         itemData[s] =  this.parseField(shape[s])
        }
    }
}


console.log(JSON.stringify(item._def.shape(), null, 4))
