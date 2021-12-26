import './navbar.scss';

const Navbar = ({color}) => {
    const navbarColor = color === "white" ? "navbar_white" : "navbar_black";
	return ( 
        <div className={`navbar ${navbarColor}`}>
            <ul>
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </div>
	)
};

export default Navbar;