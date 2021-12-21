import Button from '../button/button';
import Heading from '../heading/heading';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';


import './poster.scss';

const Poster = () => {
	return ( 
		<div className='content'>
            <Navbar/>
            <Heading/>
            <Logo color={"white"} />
            <div className='info'>
                We makes every day full of energy and taste
            </div>
            <div className='info'>
                Want to try our beans?
            </div>
            <Button type={"big"}/>
        </div> 
	)
};

export default Poster;