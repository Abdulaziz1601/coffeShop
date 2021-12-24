import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import './footer.scss';

const Footer = () => {
	return ( 
        <footer className='footer'>
            <Navbar color='black'/>
            <Logo color='black'/>
        </footer>
	)
};

export default Footer;