import whiteLogo from '../../assets/whiteLogo.png';
import blackLogo from '../../assets/blackLogo.svg';

import './logo.scss';

const Logo = ({color}) => {
    const logo = color === "black" ? <img className='logo logo_black' src={blackLogo} alt='black logo of our company'/> : <img className='logo' src={whiteLogo} alt='white logo of our company'/>
	return ( 
		logo
	);
};

export default Logo;