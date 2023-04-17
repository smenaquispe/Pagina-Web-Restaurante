import ListProducts from "./components/ListProducts"
import { ContextProvider } from "./providers/Context"

function App() {
  return (
    <>
      <ContextProvider>
          <ListProducts />  
      </ContextProvider>
    </>
  ) 
}

export default App
