
import './heading.scss';

const Heading = ({type, text}) => {
	if (!type) {
		return ( 
			<h1 className='heading heading_main'>
				{text}
			</h1>
		)
	}
	if(type === "big") {
		return ( 
			<h1 className='heading heading_main heading_big'>
				{text}
			</h1>
		)
	}
	
	if(type === "small") {
		return ( 
			<div className='heading heading_small'>
				{text}
			</div>
		)
	}

};

export default Heading;