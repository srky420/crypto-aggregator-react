import "./App.css"
import { Footer } from "./components/globals/Footer"
import { Navbar } from "./components/globals/Navbar"
import { LandingPage } from "./components/landingPage/LandingPage"


function App() {

  return (
    <main className="">
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  )
}

export default App
