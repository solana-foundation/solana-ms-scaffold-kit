export interface Language {
  id: string
  title: string
  flag: string
}

export type LocaleParam = string

export interface ParamsWithLocale {
  locale: LocaleParam
}
