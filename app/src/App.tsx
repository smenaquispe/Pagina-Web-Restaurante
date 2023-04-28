import ListProducts from "./components/Product/ListProducts"
import ListSerie from "./components/Serie/ListSerie"
import Login from "./Pages/Login"
import { ContextProvider } from "./providers/Context"

function App() {
  return (
    <>
      <ContextProvider>
        <>
          <Login />
        </>
      </ContextProvider>
    </>
  ) 
}

export default App
