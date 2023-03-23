import { NavLink } from "react-router-dom"

const Navlink = ({ link, text }) => {
    return (
        <NavLink to={link} className="block py-2 pl-3 pr-4 rounded-lg cursor-pointer hover:bg-gray-100" aria-current="page" >{text}</NavLink>
    )
}

export default Navlink;