import { cookies } from "next/headers";
import { documentConfigMap } from "./documentConfigMap";
import { DocumentTypeConfig } from "@ulld/configschema/zod/documentConfigSchema";
import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { WithFSSearchParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams"
import { ensureAbsolute } from "@ulld/utilities/utils/fsUtils"
import { SearchAllParams } from "@ulld/utilities/types"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { getPathnameFromHeaders } from "@ulld/utilities/getPathnameFromHeaders";
import { FsRootGlob } from "@ulld/utilities/fsRootGlob"
import { supportedFileTypes } from "@ulld/types/enums";


type NotePropertiesOutput = ({
    useFs: true
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension: string
    absolutePath: string
}) | ({
    useFs: false
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension?: string
    absolutePath?: string
})

type NotePropsBeforeRun = {
    slug: string;
    docType: string | AppConfigSchemaOutput["noteTypes"][number];
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
    docType: string
    filetype?: ParsableExtensions | null
    fsPath: string
    docTypeConfig: DocumentTypeConfig
    alwaysPreferFs: boolean
    fsRoot: string
    filetypeSpecificAppendices: BuildStaticDataOutput["filetypeSpecificAppendices"]
    constructor(props: NotePropsBeforeRun, docType: string | AppConfigSchemaOutput["noteTypes"][number], filetype: ParsableExtensions | undefined = undefined, pathname: string | null, public appConfig: AppConfigSchemaOutput, buildData: BuildStaticDataOutput) {
        let dt = typeof props.docType === "object" ? props.docType : typeof docType === "object" ? docType : documentConfigMap(appConfig)[(props.docType || docType) as any]
        this.filetypeSpecificAppendices = buildData.filetypeSpecificAppendices
        this.fsRoot = appConfig.fsRoot
        this.alwaysPreferFs = typeof appConfig.alwaysPreferFs === "boolean" ? appConfig.alwaysPreferFs : false
        this.docTypeConfig = dt
        this.docType = dt.id
        this.props = {
            ...props,
            slug: Array.isArray(props.slug) ? props.slug.join("/") : props.slug
        }
        this.filetype = filetype
        this.pathname = pathname
        this.preferFs = this.doesPreferFs()
        this.fsPath = this.__getFsPath(appConfig)
    }
    async checkTypesExist() {
        let g = new FsRootGlob({
            path: this.fsPath
        })
        return await g.getFileMatches(this.appConfig, {
            returnAs: "rootRelative"
        })
    }
    private __getFsPath(config: AppConfigSchemaOutput): string {
        let _p = this.props.slug
        for (const k in this.filetypeSpecificAppendices) {
            let appendex = this.filetypeSpecificAppendices[k as ParsableExtensions]
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

    shouldUseFilesystem(config: AppConfigSchemaOutput): boolean {
        let ignorePreferFs = config.ignorePreferFsExtensions || []
        if (this.filetype && this.filetype in ignorePreferFs) {
            return false
        }
        let slug = this.props.slug
        let slugIsArray = Array.isArray(slug)
        for (var i = 0; i < ignorePreferFs.length; i++) {
            let _k = ignorePreferFs[i].original
            const k = this.filetypeSpecificAppendices[_k as ParsableExtensions]
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

    getFiletypeFromPathname(config: AppConfigSchemaOutput) {
        let _entries = Object.entries(this.filetypeSpecificAppendices)
        for (var i = 0; i < _entries.length; i++) {
            const item = _entries[i]
            if (item[1] && Boolean(this.pathname?.endsWith(item[1]) || this.props?.slug?.endsWith(item[1]))) {
                return item[0]
            }
        }
        return ".mdx"
    }


    getFormatFromPath(p: string){
        let f = p.slice(p.lastIndexOf(".") + 1)
        return supportedFileTypes.includes(f as any) ? `.${f}` as ParsableExtensions : undefined
    }

    async run(): Promise<NotePropertiesOutput> {
        let existsMap = await this.checkTypesExist()
        let ftMatch = existsMap[0]
        let format = this.getFormatFromPath(ftMatch) || ".mdx"
        if (ftMatch && this.preferFs) {
            return {
                useFs: true,
                format: format,
                rootRelativePathWithExtension: ftMatch,
                rootRelativePath: this.fsPath,
                absolutePath: ensureAbsolute(ftMatch, this.fsRoot)
            }
        }
        return {
            useFs: false,
            format: format,
            rootRelativePath: this.fsPath,
            rootRelativePathWithExtension: ftMatch ? ftMatch : undefined,
            absolutePath: ftMatch ? ensureAbsolute(ftMatch, this.fsRoot) : undefined
        }
    }
    // TODO: Moved docType over to document id and am passing that in in the individual note page. If that is incorrect, resole that issue.
    static async formatNoteProps<T extends WithFSSearchParams>(docType: AppConfigSchemaOutput["noteTypes"][number], params: T["params"], searchParams: WithFSSearchParams["searchParams"], appConfig: AppConfigSchemaOutput, buildData: BuildStaticDataOutput) {
        let props = {
            slug: Array.isArray(params.slug) ? params.slug.join("/") : params.slug,
            docType,
            preferFs: Boolean(searchParams?.fs),
            searchParams: searchParams
        }
        let pathname = getPathnameFromHeaders()
        let manager = new SpecificNoteQueryManager(props, props.docType, undefined, pathname, appConfig, buildData)
        let noteProps = await manager.run()
        return {
            ...props,
            noteProps: noteProps
        }
    }
}
