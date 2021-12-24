import './navbar.scss';

const Navbar = ({color}) => {
    const navbarColor = color === "white" ? "navbar_white" : "navbar_black";
	return ( 
        <div className={`navbar ${navbarColor}`}>
            <ul>
                <li><a href="default.asp">Coffee house</a></li>
                <li><a href="news.asp">Our coffee</a></li>
                <li><a href="contact.asp">For your pleasure</a></li>
            </ul>
        </div>
	)
};

export default Navbar;