import ListProducts from "./components/ListProducts"
import ListSerie from "./components/ListSerie"
import { ContextProvider } from "./providers/Context"

function App() {
  return (
    <>
      <ContextProvider>
        <>
          <ListProducts />
          <ListSerie />
        </>
      </ContextProvider>
    </>
  ) 
}

export default App
