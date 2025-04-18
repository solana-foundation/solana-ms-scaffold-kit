import { type SchemaTypeDefinition } from 'sanity'
import { page } from './page'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, page],
}
