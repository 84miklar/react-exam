import { Routes } from "./routes/Routes"
import { Navigation } from "../src/components/navigation/Navigation"
import "./shared/global/Global.css"
import { DataProvider } from "./shared/provider/DataProvider"
import { MovieDataProvider } from "./shared/provider/MovieDataProvider"

function App() {
  return (
    <DataProvider>
      <MovieDataProvider>
        <Routes>
          <Navigation />
        </Routes>
      </MovieDataProvider>
    </DataProvider>
  )
}

export default App
