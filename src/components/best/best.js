import Card from '../card/card';
import Heading from '../heading/heading'
import './best.scss';

const Best = () => {
	return (
        <section className='best'>
            <div className='best__wrapper'>
                <Heading type="small" text={"Our best"} />
                <Card/>
            </div>
        </section> 
	)
};

export default Best;