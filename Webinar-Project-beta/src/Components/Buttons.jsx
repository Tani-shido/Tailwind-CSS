export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <div onClick={(e) => {e.currentTarget.parentElement.parentElement.style.display = 'none';}}className={`cursor-pointer w-xs mt-12 text-md font-medium p-4 outline-none rounded-xl ${disabled ? "bg-gray-400" : "bg-emerald-400"}`}>
        {children}
    </div>
}
