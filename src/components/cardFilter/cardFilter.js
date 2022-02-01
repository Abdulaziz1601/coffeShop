import { useState } from 'react';
import Card from '../card/card';

import './cardFilter.scss';

const CardFilter = (props) => {
	const [term, setTerm] = useState('');

	const buttons = [
		{place: 'Brazil'},
		{place: 'Kenya'},
		{place: 'Columbia'},
	];

	const onUpdateSearch = (e) => {
		setTerm(e.target.value);
		props.onUpdateSearch(term);
	}

	const cards = props.data.map((item, i) => (
		<Card key={i} {...item} />
	));
	
	const renderBtns = () => {
		const items = buttons.map(({place}) => {
			const active = props.filter === place;
			const clazz = active ? 'cardFilter__btn_active': null;
			
			return (
				<button type='button' 
						className={`cardFilter__btn ${clazz}`}
						key={place} 
						onClick={() => props.onButtonsFilter(place)}>
						{place}
				</button>
			);
		})
		return items;
	}
	
	return (
		<>
			<hr className='line'/>
			<section className='cardFilter'>
				<div className='cardFilter__wrapper'>
					<form className='cardFilter__form'>
						<span>Lookiing for</span>
						<input 
							className='cardFilter__input'
							type="text"
							placeholder='start typing here...'  
							onChange={onUpdateSearch}/>
					</form>
					<div className='cardFilter__filter'>
						<span>Or filter</span>
						<div className='cardFilter__btn-wrapper'>
							{renderBtns()}
						</div>
					</div>
				</div>
		
				<div className='cardFilter__card-wrapper'>
					{cards}
				</div>
		
			</section>
		</> 
	)
};

export default CardFilter;