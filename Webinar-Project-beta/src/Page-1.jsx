import { Input } from "./Components/Inputs"
import { Button } from "./Components/Buttons"

export function PageOne(){
    return <>
        <div className="min-w-screen min-h-screen bg-blue-950 text-white text-center flex flex-col align-center">
            <div id="heroSec" className="text-3xl font-medium">
                <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
                <div className="pb-16">Verify Your Age</div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-md pb-4 text-gray-400">Please confirm your birth year, This data will not be stored.</p>
                <Input type={"text"} placeholder={"Your Birth Year"}></Input>
                <Button disabled={false}>Continue</Button>
            </div>
        </div>

    </>
}