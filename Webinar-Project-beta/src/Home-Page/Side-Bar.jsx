export function SideBar(){

    return<>
        <div className="text-stone-700 h-full w-0 xl:w-lg xl:p-4 border-r-2 border-stone-200 overflow-hidden transition-all duration-100 ease-in-out">

          <div className="w-xs py-2 flex mb-4 justify-between">
            <button className="px-8 border-none rounded-xl bg-blue-950 text-white"> <img src="" alt="" /> Webinar<span className="text-emerald-400">.gg</span></button>
            <img src="https://www.hola.com/horizon/original_aspect_ratio/16b6ddb698f4-sydney-novia1-z.jpg" className="w-12 h-12 border-none rounded-xl" alt="The nun" />
          </div>

          <button className="w-xs my-4 p-2 px-4 flex justify-between border-none rounded-md hover:bg-red-400 hover:font-semibold hover:text-stone-900 cursor-pointer transition`-all duration-300 ease-in-out">
            <div className="">Home</div>
            <div><img className="w-6 " src="https://www.svgrepo.com/show/521703/home.svg" alt="SVG" /></div>
          </button>

          <button className="w-xs my-4 p-2 px-4 flex justify-between border-none rounded-md hover:bg-red-400 hover:font-semibold hover:text-stone-900 cursor-pointer transition-all duration-300 ease-in-out">
            <div className="">Webinars</div>
            <div><img className="w-6 " src="https://www.svgrepo.com/show/447662/group.svg" alt="SVG" /></div>
          </button>

          <button className="w-xs my-4 p-2 px-4 flex justify-between border-none rounded-md hover:bg-red-400 hover:font-semibold hover:text-stone-900 cursor-pointer transition-all duration-300 ease-in-out">
            <div className="">Billing</div>
            <div><img className="w-6 " src="https://www.svgrepo.com/show/224173/invoice-bill.svg" alt="SVG" /></div>
          </button>

          <button className="w-xs my-4 p-2 px-4 flex justify-between border-none rounded-md hover:bg-red-400 hover:font-semibold hover:text-stone-900 cursor-pointer transition-all duration-300 ease-in-out">
            <div className="">User Management</div>
            <div><img className="w-6 " src="https://www.svgrepo.com/show/221064/profile.svg" alt="SVG" /></div>
          </button>

          <button className="w-xs my-4 p-2 px-4 flex justify-between border-none rounded-md hover:bg-red-400 hover:font-semibold hover:text-stone-900 cursor-pointer transition-all duration-300 ease-in-out">
            <div className="">Settings</div>
            <div><img className="w-6 " src="https://www.svgrepo.com/show/107136/settings-gear.svg" alt="SVG" /></div>
          </button>

          <div>Button:  Open/Close</div>
          
        </div>

    </>
}