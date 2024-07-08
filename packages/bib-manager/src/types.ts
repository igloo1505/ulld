import {serverClient} from "@ulld/api/serverClient"

export interface BibliographyPageProps {
   prismaBib: Awaited<ReturnType<typeof serverClient.bibliography.getBib>>
}
