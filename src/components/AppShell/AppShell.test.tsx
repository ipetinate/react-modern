import { customRender, screen } from '@/test'

import { AppShell } from './AppShell'

describe('AppShell', () => {
  it("should work's properly", () => {
    customRender(
      <AppShell>
        <p>GarageKit</p>
      </AppShell>
    )

    expect(screen.getByText('GarageKit')).toBeInTheDocument()
  })
})
