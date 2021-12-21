import './navbar.scss';

const Navbar = () => {
	return ( 
        <div className='container'>
            <ul>
                <li><a href="default.asp">Coffee house</a></li>
                <li><a href="news.asp">Our coffee</a></li>
                <li><a href="contact.asp">For your pleasure</a></li>
            </ul>
        </div>
	)
};

export default Navbar;