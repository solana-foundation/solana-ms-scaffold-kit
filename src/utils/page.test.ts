import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Mock } from 'vitest'
import { LANGUAGES } from '@/constants/language'
import { getSeoData } from '@/sanity/lib/getSeoData'
import { pageSeoQuery } from '@/sanity/lib/queries/page'
import { generatePageMetadata, generateStaticParams, getGenerateMetadata } from './page'

// Mock the getSeoData function
vi.mock('@/sanity/lib/getSeoData', () => ({
  getSeoData: vi.fn(),
}))

describe('page utils', () => {
  describe('generateStaticParams', () => {
    it('should return an array of locale objects based on LANGUAGES', async () => {
      const result = await generateStaticParams()

      expect(result).toEqual(
        LANGUAGES.map((lang) => ({
          locale: lang.id,
        }))
      )
    })
  })

  describe('getGenerateMetadata', () => {
    const mockQuery = 'test-query'
    const mockParams = {
      locale: 'en',
      customParam: 'test',
    }

    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should generate metadata when pathname is provided', async () => {
      const mockPathname = '/test-path'
      const mockSeoData = { title: 'Test Title' }

      const getPathname = vi.fn().mockReturnValue(mockPathname)
      ;(getSeoData as Mock).mockResolvedValue(mockSeoData)

      const metadataGenerator = await getGenerateMetadata(mockQuery, getPathname)
      const result = await metadataGenerator({ params: mockParams })

      expect(getPathname).toHaveBeenCalledWith(mockParams)
      expect(getSeoData).toHaveBeenCalledWith({
        query: mockQuery,
        pathname: mockPathname,
        params: mockParams,
      })
      expect(result).toEqual(mockSeoData)
    })

    it('should handle null pathname', async () => {
      const getPathname = vi.fn().mockReturnValue(null)
      ;(getSeoData as Mock).mockResolvedValue({ title: 'Test' })

      const metadataGenerator = await getGenerateMetadata(mockQuery, getPathname)
      const result = await metadataGenerator({ params: mockParams })

      expect(getPathname).toHaveBeenCalledWith(mockParams)
      expect(getSeoData).toHaveBeenCalled()
      expect(result).toBeDefined()
    })

    it('should throw error when pathname is undefined', async () => {
      const getPathname = vi.fn().mockReturnValue(undefined)

      const metadataGenerator = await getGenerateMetadata(mockQuery, getPathname)

      await expect(metadataGenerator({ params: mockParams })).rejects.toThrow(
        'Pathname could not be generated.'
      )
    })
  })

  describe('generatePageMetadata', () => {
    const mockParams = {
      locale: 'en',
      pathname: '/test-path',
    }

    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should generate page metadata correctly', async () => {
      const mockSeoData = { title: 'Test Page' }
      ;(getSeoData as Mock).mockResolvedValue(mockSeoData)

      const result = await generatePageMetadata({ params: mockParams })

      expect(getSeoData).toHaveBeenCalledWith({
        query: pageSeoQuery,
        pathname: mockParams.pathname,
        params: mockParams,
      })
      expect(result).toEqual(mockSeoData)
    })

    it('should handle null pathname', async () => {
      const paramsWithNullPath = {
        locale: 'en',
        pathname: null,
      }
      const mockSeoData = { title: 'Test Page' }
      ;(getSeoData as Mock).mockResolvedValue(mockSeoData)

      const result = await generatePageMetadata({ params: paramsWithNullPath })

      expect(getSeoData).toHaveBeenCalledWith({
        query: pageSeoQuery,
        pathname: null,
        params: paramsWithNullPath,
      })
      expect(result).toEqual(mockSeoData)
    })
  })
})
