
import CardItem from '../cardItem/cardItem';
import './cardFilter.scss';


const CardFilter = ({data}) => {
	const cards = data.map((item) => (
		<CardItem {...item} />
	));
	return (
        <section className='cardFilter'>
            {/* <hr className='card__line'/> */}
        <div className='cardFilter__wrapper'>
			<form className='cardFilter__form'>
				<span>Lookiing for</span>
				<input className='cardFilter__input' type="text" placeholder='start typing here...' />
			</form>
			<div className='cardFilter__filter'>
				<span>Or filter</span>
				<div className='cardFilter__btn-wrapper'>
					<button className='cardFilter__btn'>Brazil</button>
					<button className='cardFilter__btn'>Kenya</button>
					<button className='cardFilter__btn'>Columbia</button>
				</div>
			</div>
        </div>

        <div className='cardFilter__card-wrapper'>
			{cards}
		</div>

        </section> 
	)
};

export default CardFilter;