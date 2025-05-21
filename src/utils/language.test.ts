import { describe, expect, it } from 'vitest'
import { DEFAULT_LANGUAGE, LANGUAGES } from '@/constants/language'
import { getLanguage } from './language'

describe('getLanguage', () => {
  it('should return DEFAULT_LANGUAGE when no language is provided', () => {
    const result = getLanguage()
    expect(result).toBe(DEFAULT_LANGUAGE)
  })

  it('should return DEFAULT_LANGUAGE when undefined is provided', () => {
    const result = getLanguage(undefined)
    expect(result).toBe(DEFAULT_LANGUAGE)
  })

  it('should return DEFAULT_LANGUAGE when empty string is provided', () => {
    const result = getLanguage('')
    expect(result).toBe(DEFAULT_LANGUAGE)
  })

  it('should return the correct language when a valid language ID is provided', () => {
    const spanish = LANGUAGES.find(lang => lang.id === 'es')
    const result = getLanguage('es')
    expect(result).toBe(spanish)
  })

  it('should return DEFAULT_LANGUAGE when an invalid language ID is provided', () => {
    const result = getLanguage('invalid-lang')
    expect(result).toBe(DEFAULT_LANGUAGE)
  })
})
