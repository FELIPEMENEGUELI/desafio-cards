import { ProviderProps } from "./hooks/useProps"
import { Home } from "./pages/Home"

export function App() {
  return (
    <ProviderProps>
      <Home />
    </ProviderProps>
  )
}
