import { NavLink } from "react-router-dom"

const Navlink = ({ link, text, active, handleChangeCategory }) => {
    return (
        // <NavLink to={link} className={active ? "block py-2 pl-3 pr-4 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white active" : "block py-2 pl-3 pr-4 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white"} aria-current="page" >{text}</NavLink>
        <div onClick={() => handleChangeCategory(text)} className={active ? "block py-2 pl-3 pr-4 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white active" : "block py-2 pl-3 pr-4 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white"} aria-current="page" >{text}</div>
    )
}

export default Navlink;