import LoginComponent from "./components/LoginComponent"
import PrisonerComponent from "./components/PrisonerComponent"
import PrisonersComponent from "./components/PrisonersComponent"
import AddPrisonersComponent from "./components/AddPrisonersComponent"
import { Routes, Route, Link } from "react-router-dom"
import { active } from "./components/LoginComponent"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
      </Routes>
    </>
  )
}

export default App;