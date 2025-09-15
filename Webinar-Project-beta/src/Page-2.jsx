import { Input } from "./Components/Inputs"
import { Button } from "./Components/Buttons"

export function PageTwo(){
    return <>
    <div className="min-w-screen min-h-screen pt-40 bg-blue-950 text-white text-center flex flex-col align-center">
      <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Let's get started</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-md pb-4 text-gray-400">Enter your email id</p>
        <Input type={"text"} placeholder={"Email Id"}></Input>
        <Button disabled={false}>Sign-Up</Button>
      </div>
    </div></>

}
