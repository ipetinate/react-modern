import { AppShell } from '@/components/AppShell'
import { AppProviders } from './providers/AppProviders'

import { Router } from './router'

export function App() {
  return (
    <AppShell>
      <AppProviders>
        <Router />
      </AppProviders>
    </AppShell>
  )
}
