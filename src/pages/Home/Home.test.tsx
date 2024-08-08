import { customRender, screen } from '@/test'
import { Home } from './Home'

describe('Home', () => {
  it("should work's properly", () => {
    customRender(<Home />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
