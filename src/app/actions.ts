'use server'

import { draftMode } from 'next/headers'

export async function toggleDraftMode() {
  const draftModeRes = await draftMode()
  const isEnabled = draftModeRes.isEnabled
  const toggle = isEnabled ? draftModeRes.disable() : draftModeRes.enable()
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  await Promise.allSettled([toggle, delay])

  return !isEnabled
}
