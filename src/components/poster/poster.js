import Button from '../button/button';
import Heading from '../heading/heading';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';


import './poster.scss';

const Poster = () => {
	return ( 
		<section className='content'>
            <Navbar color="white"/>
            <Heading text="Everything You Love About Coffee"/>
            <Logo color={"white"} />
            <div className='info'>
                We makes every day full of energy and taste
            </div>
            <div className='info'>
                Want to try our beans?
            </div>
            <Button type={"big"}/>
        </section> 
	) 
};

export default Poster;