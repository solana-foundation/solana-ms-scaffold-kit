import { LocaleParam } from './language'

export type TParams<T = {}> = Promise<
  {
    locale: LocaleParam
  } & T
>
