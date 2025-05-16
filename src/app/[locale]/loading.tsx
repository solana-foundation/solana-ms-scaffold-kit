import { getTranslations } from 'next-intl/server'

export default async function Loading() {
  const t = await getTranslations('utils')

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center p-4 text-center align-middle">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <p className="text-gray-500">{t('loading')}...</p>
      </main>
    </div>
  )
}
