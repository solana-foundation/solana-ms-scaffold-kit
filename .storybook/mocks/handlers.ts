import { http, HttpResponse } from 'msw'

export const handlers = [
  // Add any API mocks here
  http.get('*/api/*', () => {
    return HttpResponse.json({})
  }),
]
