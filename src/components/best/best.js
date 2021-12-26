import Card from './card';
import Heading from '../heading/heading'
import './best.scss';

const Best = () => {
	return (
        <section className='best'>
            <Heading type="small" text={"Our best"} />
            <Card/>
        </section> 
	)
};

export default Best;