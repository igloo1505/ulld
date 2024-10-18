// TODO: Enable SuperJson methods in all prismaMdxRelation classes!

export type _JsonParsableField = string | number | boolean | null | object
export type _SuperJsonParsableFieldExt = undefined | bigint | Date | RegExp | Error | URL

export type _SuperJsonParsableField = _JsonParsableField &
    _SuperJsonParsableFieldExt & Set<_SuperJsonParsableFieldExt> & Map<_SuperJsonParsableFieldExt, _SuperJsonParsableFieldExt>

export type JsonParsableField<
    T extends _JsonParsableField | _SuperJsonParsableField = _JsonParsableField,
> = T | T[] | T[][] | T[][][]

export type JsonParsableRecord<T extends _JsonParsableField | _SuperJsonParsableField = _JsonParsableField> = Record<string, JsonParsableField<T>> | Record<string, Record<string, JsonParsableField<T>>>

export type JsonParsableData = JsonParsableRecord | Record<string, JsonParsableField<_JsonParsableField>>[] | Record<string, Record<string, JsonParsableField<_JsonParsableField>>>

export type SuperJsonParsableData = JsonParsableRecord | Record<string, JsonParsableField<_SuperJsonParsableField>>[] | Record<string, Record<string, JsonParsableField<_SuperJsonParsableField>>>


// TODO: Leaving this for now to later implement the superjson parsing.
export type PluginSettingsRecord = JsonParsableRecord
