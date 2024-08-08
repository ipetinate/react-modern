import type { PropsWithChildren } from 'react'

export function AppShell({ children }: PropsWithChildren) {
  return <div className="w-full h-full">{children}</div>
}
