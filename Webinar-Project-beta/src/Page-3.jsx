import { Button } from "./Components/Buttons"
import { OtpInput } from "./Components/OtpInput"
import { Timer } from "./Components/Timer"


export function PageThree(){
    return <>
    <div className="min-w-screen min-h-screen bg-blue-950 text-white text-center flex flex-col align-center">
       <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Check Your Email For A Code</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-md pb-4 text-gray-400">Please enter the verification code sent to your email id _mail-id_</p>
        <OtpInput type={"text"}></OtpInput>
        <Timer />
        <Button disabled={false}>Verify</Button>
        <p className="text-md p-2 text-gray-400">Can't find the code?Click _here_ to resend.</p>
      </div>
    </div></>

}