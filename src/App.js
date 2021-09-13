import { Routes } from "./routes/Routes"
import { Navigation } from "../src/components/navigation/Navigation"
import "./shared/global/Global.css"
import { DataProvider } from "./shared/provider/DataProvider"
import { UserProvider } from "./shared/provider/UserProvider"

function App() {
  return (
    <UserProvider>
      <DataProvider>
        <Routes>
          <Navigation />
        </Routes>
      </DataProvider>
    </UserProvider>
  )
}

export default App
