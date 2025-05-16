import Debug from 'debug'
import { env } from '../../env.mjs'

const debugApp = Debug('app')

/**
 * A utility function for logging messages.
 *
 * @param args - The arguments to be logged.
 */
export const log = (...args: unknown[]) => {
  if (env.DEBUG) {
    console.log('DEBUG:', env.DEBUG)
    if (typeof window !== 'undefined') {
      console.log('[app]', ...args)
    } else {
      // Use debug only on the server
      // @ts-expect-error -- Debug any is necessary for the debug library
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      debugApp(...(args as any[]))
      // Fallback to console.log for server-side rendering
      console.log('[app]', ...args)
    }
  }
}
