export function SideBar({

}) {
    return <div className=" h-screen text-stone-700 p-4">
        <div className="py-4 flex mb-4 justify-between">
            <button className="px-8 border-none rounded-xl bg-blue-950 text-white"> <img src="" alt="" /> Webinar<span className="text-emerald-400">.gg</span></button>
            <img src="https://www.hola.com/horizon/original_aspect_ratio/16b6ddb698f4-sydney-novia1-z.jpg" className="w-12 h-12 border-none rounded-xl" alt="The nun" />
        </div>
        <a href="/">
            <div className="py-2 mb-4 border-none rounded-md flex justify-between hover:font-medium hover:bg-blue-100 hover:text-blue-950">
                <span className="ml-4">Home</span>
                <img className="mr-4 w-6 " src="https://www.svgrepo.com/show/521703/home.svg" alt="SVG" />
            </div>
        </a>
        <a href="/">
            <div className="py-2 mb-4 border-none rounded-md flex justify-between hover:font-medium hover:bg-blue-100 hover:text-blue-950">
                <span className="ml-4">Webinars</span>
                <img className="mr-4 w-6 " src="https://www.svgrepo.com/show/447662/group.svg" alt="SVG" />
            </div>
        </a>
        <a href="/">
            <div className="py-2 mb-4 border-none rounded-md flex justify-between hover:font-medium hover:bg-blue-100 hover:text-blue-950">
                <span className="ml-4">Billing</span>
                <img className="mr-4 w-6 " src="https://www.svgrepo.com/show/224173/invoice-bill.svg" alt="SVG" />
            </div>
        </a>
        <a href="/">
            <div className="py-2 mb-4 border-none rounded-md flex justify-between hover:font-medium hover:bg-blue-100 hover:text-blue-950">
                <span className="ml-4">User Management</span>
                <img className="mr-4 w-6 " src="https://www.svgrepo.com/show/221064/profile.svg" alt="SVG" />
            </div>
        </a>
        <a href="/">
            <div className="py-2 mb-4 border-none rounded-md flex justify-between hover:font-medium hover:bg-blue-100 hover:text-blue-950">
                <span className="ml-4">Settings</span>
                <img className="mr-4 w-6 " src="https://www.svgrepo.com/show/522451/settings-cog.svg" alt="SVG" />
            </div>
        </a>
    </div>
}