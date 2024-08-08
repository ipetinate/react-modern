import { AppProviders } from '@/providers/AppProviders'
import { render, type RenderOptions } from '@testing-library/react'

export function customRender(ui: JSX.Element, options?: RenderOptions) {
  return render(ui, { wrapper: AppProviders, ...options })
}
