import { NavLink, Outlet } from "react-router-dom"
import './NavBar.css'

export default function NavBar({ data }) {
    return (
        <nav className="container">
            <NavLink to="/" className="link">Home</NavLink>
            {
                data.map(dataElement => (
                    <NavLink className="link" key={ dataElement.id } to={ `/content/${dataElement.id}` } >{ dataElement.title }</NavLink>
                ))
            }
        </nav>
    )
}
