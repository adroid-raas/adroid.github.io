import { NavLink } from "react-router-dom";
import { useState } from "react";
import './style.css'

const Navbar = () => {

    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive)
    };

    const closeMobileMenu = () => {
        setMobileMenuActive(false)
    }

    const menuItems = [
        {mid: 1, label: 'Home', link: '/'},
        {mid: 2, label: 'Contact', link: '/contact'},
    ]


    return (
        <div className={` ${mobileMenuActive ? 'ad-mobile-nav-open' : ''}`}>
            <nav>
                <ul>
                    {
                        menuItems.map((menuList) => (
                                <li key={menuList.mid}><NavLink onClick={closeMobileMenu} to={menuList.link}>{menuList.label}</NavLink></li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div onClick={toggleMobileMenu} className="ad-menu-toggle">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;