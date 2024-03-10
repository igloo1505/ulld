import { cookies } from "next/headers";
import { documentConfigMap } from "./documentConfigMap";
import { ParsableExtensions, DocTypes, DocumentTypeConfig, getInternalConfig, ParsedAppConfig } from "@ulld/configschema";
import { SearchAllParams } from "@ulld/state";
import { ensureAbsolute } from "@ulld/utilities";
import { serverClient } from "../../trpc";


type NotePropertiesOutput = ({
    useFs: true
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension: string
    absolutePath: string
}) | ({
    useFs: false
    format?: undefined | null | ParsableExtensions
    path?: undefined | null | string
    rootRelativePath: string
    rootRelativePathWithExtension?: string
    absolutePath?: string
})

type NotePropsBeforeRun = {
    slug: string;
    docType: DocTypes;
    preferFs: boolean;
    searchParams: (SearchAllParams & {
        fs?: string | boolean | null | undefined;
        vid?: string | undefined;
        time?: string | undefined;
    }) | undefined;
}

export class SpecificNoteQueryManager {
    pathname?: string | null
    preferFs: boolean
    props: Omit<NotePropsBeforeRun, "slug"> & { slug: string }
    docType: DocTypes
    filetype?: ParsableExtensions | null
    fsPath: string
    docTypeConfig: DocumentTypeConfig
    alwaysPreferFs: boolean
    fsRoot: string
    constructor(props: NotePropsBeforeRun, docType: DocTypes, filetype?: ParsableExtensions, pathname?: string | null) {
        this.docType = docType
        const internalConfig = getInternalConfig()
        this.fsRoot = internalConfig.fsRoot
        this.alwaysPreferFs = typeof internalConfig.alwaysPreferFs === "boolean" ? internalConfig.alwaysPreferFs : false
        this.docTypeConfig = documentConfigMap(internalConfig)[this.docType]
        this.props = {
            ...props,
            slug: Array.isArray(props.slug) ? props.slug.join("/") : props.slug
        }
        this.filetype = filetype
        this.pathname = pathname
        this.preferFs = this.doesPreferFs()
        this.fsPath = this.__getFsPath(internalConfig)
    }
    async checkTypesExist() {
        return await serverClient.fsUtils.getParsableFiletypesAtPath(this.fsPath)
    }
    private __getFsPath(config: ParsedAppConfig): string {
        let _p = this.props.slug
        for (const k in config.filetypeSpecificAppendices) {
            let appendex = config.filetypeSpecificAppendices[k as ParsableExtensions]
            if (appendex && _p.endsWith(appendex)) {
                if (config.ignorePreferFsExtensions?.includes(k as any)) {
                    this.preferFs = false
                }
                _p = _p.slice(0, _p.length - appendex.length)
            }

        }
        return `${this.docTypeConfig.fs || ""}/${_p}`
    }


    doesPreferFs() {
        let cookieJar = cookies()
        let pfs = this.props.preferFs || cookieJar.get("preferFs")?.value === "true"
        return Boolean(pfs || this.alwaysPreferFs)
    }

    shouldUseFilesystem(config: ParsedAppConfig): boolean {
        let ignorePreferFs = config.ignorePreferFsExtensions || []
        if (this.filetype && this.filetype in ignorePreferFs) {
            return false
        }
        let slug = this.props.slug
        let slugIsArray = Array.isArray(slug)
        for (var i = 0; i < ignorePreferFs.length; i++) {
            let _k = ignorePreferFs[i].original
            const k = config.filetypeSpecificAppendices[_k as ParsableExtensions]
            if (k && slugIsArray && slug?.at(-1)?.endsWith(k)) {
                return false
            }
            if (k && typeof slug === "string" && slug?.endsWith(k)) {
                return false
            }
            if (k && this.pathname?.endsWith(k)) {
                return false
            }
        }
        return Boolean(this.preferFs)
    }

    getFiletypeFromPathname(config: ParsedAppConfig) {
        let _entries = Object.entries(config.filetypeSpecificAppendices)
        for (var i = 0; i < _entries.length; i++) {
            const item = _entries[i]
            if (item[1] && Boolean(this.pathname?.endsWith(item[1]) || this.props?.slug?.endsWith(item[1]))) {
                return item[0]
            }
        }
        return ".mdx"
    }

    async run(): Promise<NotePropertiesOutput> {
        let existsMap = await this.checkTypesExist()
        console.log("existsMap: ", existsMap)
        let firstMatch = Object.entries(existsMap).find((x) => x[1])
        let ftMatch = firstMatch ? firstMatch[0] as ParsableExtensions : undefined
        if (ftMatch && this.preferFs) {
            return {
                useFs: true,
                format: ftMatch as ParsableExtensions,
                rootRelativePathWithExtension: `${this.fsPath}${ftMatch}`,
                rootRelativePath: this.fsPath,
                absolutePath: ensureAbsolute(`${this.fsPath}${ftMatch}`, this.fsRoot)
            }
        }
        return {
            useFs: false,
            format: ftMatch,
            path: ftMatch ? `${this.fsPath}${ftMatch}` : undefined,
            rootRelativePath: this.fsPath,
            rootRelativePathWithExtension: ftMatch ? `${this.fsPath}${ftMatch}` : undefined,
            absolutePath: ftMatch ? ensureAbsolute(`${this.fsPath}${ftMatch}`, this.fsRoot) : undefined
        }
    }
}
