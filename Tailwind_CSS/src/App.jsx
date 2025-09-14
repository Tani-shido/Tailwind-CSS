import React from "react"
import './App.css'
import { MainContent } from "./Home-Page/Main-Content"
import { SideBar } from "./Home-Page/Side-Bar"

function App() {

  return <>
    <div className="bg-blue-300 w-screen h-screen text-lg">
      <div className="w-full h-full flex">
        <SideBar />
        <MainContent />
      </div>

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
        <div className="col-span-6 w-xs bg-fuchsia-300">Hi there from the 1st div</div>
        <div className="col-span-4 w-xs bg-indigo-300">Hi there from the 2nd div</div>
        <div className="col-span-2 w-xs bg-zinc-300">Hi there from the 3rd div</div>
      </div>

      <div className="w-full bg-gray-300">
        Conditional Rendering in Tailwind
        <div className="w-40 bg-red-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = xs | red</div>
        <div className="w-40 bg-green-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = sm | green</div>
        <div className="w-40 bg-yellow-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = md | yellow</div>
        <div className="w-40 bg-purple-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = lg | purple</div>
        <div className="w-40 bg-orange-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = xl | orange</div>
        <div className="w-40 bg-pink-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = 2xl | pink</div>
        <div className="w-40 bg-sky-300 xs:bg-red-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-pink-300 3xl:bg-sky-300 4xl:bg-gray-300 text-center">width = 3xl | sky</div>
      </div> 

       <div className="h-full md:h-screen w-full flex">
        <div className="bg-red-200 h-screen w-0 md:w-96 transition-all duration-100 ease-in-out">
          <div className="flex justify-between m-4 p-2 border-none rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in-out">
            <div>span</div>
            <div><img src="" className="w-12" alt="" /></div>
          </div>
          <div className="flex justify-between m-4 p-2 border-none rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in-out">
            <div>span</div>
            <div><img src="" className="w-12" alt="" /></div>
          </div>
          <div className="flex justify-between m-4 p-2 border-none rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in-out">
            <div>span</div>
            <div><img src="" className="w-12" alt="" /></div>
          </div>
          <div className="flex justify-between m-4 p-2 border-none rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in-out">
            <div>span</div>
            <div><img src="" className="w-12" alt="" /></div>
          </div>
          <div className="flex justify-between m-4 p-2 border-none rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in-out">
            <div>span</div>
            <div><img src="" className="w-12" alt="" /></div>
          </div>
        </div>

        <div className="bg-red-300 h-full md:h-full md:h-screen w-full">
          <div className="bg-gray-700 h-48">Black Background</div>
          <div className="grid grid-cols-12 gap-4 p-4">
            <div className="bg-yellow-200 h-80 shadow-md border rounded-2xl p-4 col-span-12 md:col-span-3">Tanishq</div>
            <div className="bg-yellow-200 h-80 shadow-md border rounded-2xl p-4 col-span-12 md:col-span-9">Good Morning</div>
            <div className="bg-yellow-200 h-80 shadow-md border rounded-2xl p-4 col-span-12 md:col-span-5">Friday, 12 September</div>
            <div className="bg-yellow-200 h-80 shadow-md border rounded-2xl p-4 col-span-12 md:col-span-4">Schedule</div>
          </div>
        </div>
      </div> 

    </div>
  </>
}

export default App
