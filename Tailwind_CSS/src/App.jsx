import React from "react"
import './App.css'
import { Button } from "./components/Buttons"
import { Input } from "./components/Inputs"

function App() {

  return <>
    <div className="min-w-screen min-h-screen bg-blue-950 text-white text-center flex flex-col align-center">

    <div className="bg-blue-300">
        <div className="flex justify-between">
          <div className="bg-green-200" >Div - 1(flex)</div>
          <div className="bg-red-400" >Div - 2</div>
          <div className="bg-yellow-300" >Div - 3</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="bg-gray-300 col-span-3">Div - 1(grid)</div>
          <div className="bg-purple-300 col-span-3">Div - 2</div>
          <div className="bg-orange-300 col-span-6">Div - 3</div>
        </div>

        <div className="w-40 bg-blue-500 sm:bg-pink-400 md:bg-green-500 lg:bg-yellow-500 xl:bg-cyan-500">
          Check Responsiveness
        </div>

        <div className="xl:grid grid-cols-12">
          <div className="col-span-6 bg-fuchsia-300">Hi there from the 1st div</div>
          <div className="col-span-4 bg-indigo-300">Hi there from the 2nd div</div>
          <div className="col-span-2 bg-zinc-300">Hi there from the 3rd div</div>
        </div>
      </div>

      <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Verify Your Age</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-md pb-4 text-gray-400">Please confirm your birth year, This data will not be stored.</p>
        <Input type={"text"} placeholder={"Your Birth Year"}></Input>
        <Button disabled={true}>Sign-Up</Button>
      </div>
    </div>
  </>
}

export default App
