import { Routes } from "./routes/Routes"
import { Navigation } from "../src/components/navigation/Navigation"
import "./shared/global/Global.css"
import { DataProvider } from "./shared/provider/DataProvider"

function App() {
  return (
    <DataProvider>
      <Routes>
        <Navigation />
      </Routes>
    </DataProvider>
  )
}

export default App
