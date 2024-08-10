import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { prisma } from "@ulld/database";


export const seedTargetAppIfNotExists = async (
    appConfig: AppConfigSchemaOutput,
) => {
    let existingBib = await prisma.bib.findFirst({});

    if (!existingBib) {
        await prisma.bib.create({
            data: {
                // id: 1,
                filename: appConfig.bibPath,
            },
        });
    } else if (existingBib && (existingBib.filename !== appConfig.bibPath)){
        await prisma.bib.update({
            where: {
                id: existingBib.id
            },
            data: {
                filename: appConfig.bibPath
            }
        })
    }
};

