import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { configs } from '@solana-foundation/ms-tools-config/eslint.config.react.mjs'
import { defineConfig } from 'eslint/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = defineConfig([
  [configs.react[0], { ...configs.react[1], plugins: {} }],
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
])

export default eslintConfig
