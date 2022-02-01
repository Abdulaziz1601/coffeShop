import {Link, NavLink} from 'react-router-dom';
import './navbar.scss';

const Navbar = ({color}) => {
    const navbarColor = color === "white" ? "navbar_white" : "navbar_black";
	return ( 
        <div className={`navbar ${navbarColor}`}>
            <ul>
                <li><NavLink className='navbar__link' exact activeStyle={{'text-decoration':'underline'}} to="/aboutFilter" >Coffee house</NavLink></li>
                <li><NavLink className='navbar__link' exact activeStyle={{'text-decoration':'underline'}} to="/aboutMini" >Our coffee</NavLink></li>
                <li><NavLink className='navbar__link' exact activeStyle={{'text-decoration':'underline'}} to="/allProducts" >For your pleasure</NavLink></li>
            </ul>
        </div>
	)
};

export default Navbar;