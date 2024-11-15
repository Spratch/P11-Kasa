import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}