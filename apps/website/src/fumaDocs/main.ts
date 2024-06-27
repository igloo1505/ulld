import { createMDXSource } from "fumadocs-mdx";
import {loader} from "fumadocs-core/source"
import {map} from "./map"


export const {getPage, getPages, pageTree, getLanguages, files: docFiles} = loader({
    rootDir: 'docs',
    baseUrl: '/docs',
    source: createMDXSource(map)
})
