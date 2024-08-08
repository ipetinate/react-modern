import { customRender, screen } from '@/test'

import { ResourceName } from './ResourceName'

describe('ResourceName', () => {
  it("should work's properly", () => {
    customRender(<ResourceName message="GarageKit" />)

    expect(screen.getByText('GarageKit')).toBeInTheDocument()
  })
})
