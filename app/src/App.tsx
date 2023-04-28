import ListProducts from "./components/Product/ListProducts"
import ListSerie from "./components/Serie/ListSerie"
import { ContextProvider } from "./providers/Context"

function App() {
  return (
    <>
      <ContextProvider>
        <>
          <ListSerie />
        </>
      </ContextProvider>
    </>
  ) 
}

export default App
