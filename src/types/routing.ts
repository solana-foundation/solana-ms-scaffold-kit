import { LocaleParam } from './language'

export type TParams<T extends object = object> = Promise<
  {
    locale: LocaleParam
  } & T
>
