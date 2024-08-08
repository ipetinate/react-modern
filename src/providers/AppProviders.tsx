import type { PropsWithChildren } from 'react'

import { NextUIProvider } from '@nextui-org/react'

export function AppProviders({ children }: PropsWithChildren) {
  return <NextUIProvider locale="pt-BR">{children}</NextUIProvider>
}
