import { NumberField, StringField } from "../types";
import { z } from "zod";

export class ZodFieldManager {
    parsed: NumberField | StringField;
    constructor(public field: any) {
        let parseFunctionName = `parse${field._def.typeName as z.ZodFirstPartyTypeKind}`;
        if (parseFunctionName! in this) {
            throw new Error(
                `No parse function for zod field type ${parseFunctionName}`,
            );
        }
        this.parsed = this[parseFunctionName];
    }
    getBaseParse() {
        return {
            description: this.field._def.description,
            coerce: this.field._def.coerce
        };
    }
    parseZodNumber() {
        let f = this.field as z.ZodNumber;
        let min = f._def.checks.find((a) => a.kind === "min");
        let max = f._def.checks.find((a) => a.kind === "max");
        let int = f._def.checks.find((a) => a.kind === "int");
        return {
            description: f._def.description,
            min: {
                /* @ts-ignore */
                value: min?.value,
                message: min?.message,
            },
            max: {
                /* @ts-ignore */
                value: max?.value,
                message: max?.message,
            },
            int: {
                /* @ts-ignore */
                value: int?.value,
                message: int?.message,
            },
            coerce: f._def.coerce,
            type: "number",
        } satisfies NumberField;
    }
    parseZodString() {
        let f = this.field as z.ZodString;
        let checks: Record<string, any> = {
            max: f._def.checks.find((a) => a.kind === "max"),
            min: f._def.checks.find((a) => a.kind === "min"),
            url: f._def.checks.find((a) => a.kind === "url"),
            date: f._def.checks.find((a) => a.kind === "datetime"),
            email: f._def.checks.find((a) => a.kind === "email"),
            regex: f._def.checks.find((a) => a.kind === "regex"),
        };
        return {
            ...this.getBaseParse(),
            max: {
                message: checks.max.message,
                value: checks.max.value
                },
            min: {
                message: checks.min.message,
                value: checks.min.value
                },
            url: {
                message: checks.url.message,
                value: checks.url.value
                },
            date: {
                message: checks.date.message,
                value: checks.date.value
                },
            email: {
                message: checks.email.message,
                value: checks.email.value
                },
            regex: {
                message: checks.regex.message,
                value: checks.regex.value
                },
            type: "string",
        } satisfies StringField;
    }
    // RESUME: Come back here and handle the rest of these so new configs can be generated dynamically from existing zod objects
    // parseZodEnum(){
    // let f = this.field as z.ZodEnum
    // }
    // parseZodRecord(){
    // let f = this.field as z.ZodRecord
    // }
    // parseZodFunction(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodBoolean(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodDate(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodAny(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodTuple(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodOptional(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodArray(){
    // let f = this.field as z.ZodFunction
    // }
    // parseZodNullable(){
    // let f = this.field as z.ZodFunction
    // }
}
