import { Outlet } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/globals/Footer"
import { Navbar } from "./components/globals/Navbar"


function App() {

  return (
    <main className="">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
