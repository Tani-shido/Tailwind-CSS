export function Main({

}) {
    return<>
        <div className="min-w-screen min-h-screen bg-blue-950 text-white text-center flex flex-col align-center">

      <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Verify Your Age</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-md pb-4 text-gray-400">Please confirm your birth year, This data will not be stored.</p>
        <Input type={"text"} placeholder={"Your Birth Year"}></Input>
        <Button disabled={true}>Continue</Button>
      </div>

      <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Let's get started</div>
      </div>
      <div className="flex flex-col items-center">
        <Input type={"text"} placeholder={"Email Id"}></Input>
        <Button disabled={true}>Sign-Up</Button>
      </div>

       <div id="heroSec" className="text-3xl font-medium">
        <div className="p-16"><span className="text-emerald-400">Webinar</span><span>.gg</span></div>
        <div className="pb-16">Check Your Email For A Code</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-md pb-4 text-gray-400">Please enter the verification code sent to your email id _mail-id_</p>
        <OtpInput type={"text"}></OtpInput>
        <Timer />
        <Button disabled={true}>Verify</Button>
        <p className="text-md p-2 text-gray-400">Can't find the code?Click _here_ to resend.</p>
      </div>

    </div>
    </>
}