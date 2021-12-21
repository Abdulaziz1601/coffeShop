import whiteLogo from '../../assets/whiteLogo.png';
import blackLogo from '../../assets/blackLogo.svg';

import './logo.scss';

const Logo = ({color}) => {
    const logo = color === "black" ? <img src={blackLogo}/> : <img src={whiteLogo}/>
	return ( 
		logo
	);
};

export default Logo;