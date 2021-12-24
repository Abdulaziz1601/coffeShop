import Heading from '../heading/heading';
import Navbar from '../navbar/navbar';
import './header.scss';

const Header = ({heading}) => {
	return (
        <header className='header'>
            <Navbar color={"white"} />
            <Heading type={"big"} text={heading} />
        </header> 
	)
};

export default Header;