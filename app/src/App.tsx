import PageManager from "./Pages/PageManage"
import { ContextProvider } from "./providers/Context"

function App() {
  return (
    <>
      <ContextProvider>
        <>
        <PageManager />
        </>
      </ContextProvider>
    </>
  ) 
}

export default App
