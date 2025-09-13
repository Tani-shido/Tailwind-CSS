import React from "react"
import './App.css'
import { PageOne } from "./Page-1"
import { PageTwo } from "./Page-2"
import { PageThree } from "./Page-3"
import { SideBar } from "./Home-Page/Side-Bar"
import { MainContent } from "./Home-Page/Main-Content"

function App() {

  return <>
    <div className="bg-blue-300 w-screen h-screen text-lg">
      <PageOne />
      <PageTwo />
      <PageThree /> 
      <div className="w-full h-full flex">
        <SideBar />
        <MainContent />
      </div>
    </div>
  </>
}

export default App
