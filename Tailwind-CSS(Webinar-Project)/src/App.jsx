import './App.css'
import { SideBar } from './components/User-Page/side-bar'
import { MainSection } from './components/User-Page/Main-Section'
function App() {

  return <>
  <div className='max-w-[1920px] max-h-screen mx-auto'>
    <div className='h-screen w-full grid grid-cols-5'>
      <div className='border-r-2 border-gray-300 col-span-1 h-full w-full hidden 2xl:block' ><SideBar /></div>
      <div className='border-none bg-cover col-span-4 h-full w-full ' ><MainSection /></div>
    </div>
  </div>
 </>
}

export default App
