import Heading from '../heading/heading';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';


import './poster.scss';

const Poster = () => {
	return ( 
		<section className='poster'>
            <Navbar color="white"/>
            <Heading text="Everything You Love About Coffee"/>
            <Logo color={"white"} />
            <div className='poster__info'>
                We make every day full of energy and taste
            </div>
            <div className='poster__info'>
                Want to try our beans?
            </div>
            <button className='btn'>
                More
            </button> 
        </section> 
	) 
};

export default Poster;