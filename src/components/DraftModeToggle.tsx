'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@hoodieshq/ms-tools-ui'
import { Eye, EyeOff, X } from 'lucide-react'
import { toggleDraftMode } from '@/app/actions'

interface IDraftModeToggleProps {
  isEnabled: boolean
}

export function DraftModeToggle({ isEnabled }: IDraftModeToggleProps) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [isHidden, setIsHidden] = useState(false)

  const toggle = () =>
    startTransition(() => {
      toggleDraftMode().then(() => {
        router.refresh()
      })
    })

  const hidePanel = () => {
    setIsHidden(true)
  }

  if (isHidden) {
    return null
  }

  return (
    <div className="relative z-50 h-11 w-full">
      <div className="fixed bottom-0 z-50 col-auto flex h-11 w-full items-center justify-end bg-orange-300 px-4 dark:bg-yellow-600">
        {pending ? (
          'Switching draft mode...'
        ) : (
          <Button className="cursor-pointer" variant="outline" onClick={toggle}>
            {isEnabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}{' '}
            {isEnabled ? 'Disable' : 'Enable'} draft mode
          </Button>
        )}
        <Button className="ml-2 cursor-pointer" size="icon" variant="outline" onClick={hidePanel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
