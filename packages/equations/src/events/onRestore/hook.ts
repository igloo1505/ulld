import { EventMethods } from "@ulld/configschema/types";
import { JsonSerializedBackupData } from "../dataType";

const onRestore: EventMethods<JsonSerializedBackupData>["onRestore"] = async (
    data,
    prisma,
) => {
    for await (const equation of data.data) {
        await prisma.equation.upsert({
            where: {
                id: equation.id,
            },
            update: {
                title: equation.title,
                content: equation.content,
                desc: equation.desc,
                asPython: equation.asPython,
                relatedValues: {
                    upsert: equation.relatedValues.map((v) => ({
                        where: {
                            id: v.id,
                        },
                        update: {
                            input: v.input,
                            output: v.output,
                        },
                        create: {
                            id: v.id,
                            input: v.input,
                            output: v.output,
                        },
                    })),
                },
                variables: equation.variables,
                keywords: equation.keywords,
                tags: {
                    upsert: equation.tags.map((t) => ({
                        where: {
                            value: t
                        },
                        create: {
                            value: t
                        },
                        update: {
                            value: t
                        },
                    }))
                },
                variableLegend: equation.variableLegend
            },
            create: {
                id: equation.id,
                title: equation.title,
                content: equation.content,
                desc: equation.desc,
                asPython: equation.asPython,
                relatedValues: {
                    connectOrCreate: equation.relatedValues.map((v) => ({
                        where: {
                            id: v.id,
                        },
                        update: {
                            input: v.input,
                            output: v.output,
                        },
                        create: {
                            id: v.id,
                            input: v.input,
                            output: v.output,
                        },
                    })),
                },
                variables: equation.variables,
                keywords: equation.keywords,
                tags: {
                    connectOrCreate: equation.tags.map((t) => ({
                        where: {
                            value: t
                        },
                        create: {
                            value: t
                        },
                        update: {
                            value: t
                        },
                    }))
                },
                variableLegend: equation.variableLegend
            }
        });
    }
};

export default onRestore
