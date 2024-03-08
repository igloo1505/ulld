import {Route} from "next"


export const searchByTagUrl = (tag: string) => `/searchAll?tags=${tag}` as Route


export const searchByCitationUrl = (cit: string) => `/searchAll?citations=${cit}` as Route
