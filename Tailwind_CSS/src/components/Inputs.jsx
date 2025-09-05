export const Input = ({
    type,
    placeholder
}) => {
    return <div>
        <input className="w-xs text-md text-gray-400 p-4 border rounded-xl border-sky-800 bg-sky-950" type={type} placeholder={placeholder}></input>
    </div>

}