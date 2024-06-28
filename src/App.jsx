import React from "react"
import Allroutes from "./Routes/Allroutes"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
          <Allroutes />
      </BrowserRouter>

    </>
  )
}

export default App
