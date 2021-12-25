
import { Component } from 'react/cjs/react.production.min';
import CardItem from '../cardItem/cardItem';
import './cardFilter.scss';


class CardFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.buttons = [
			{place: 'Brazil'},
			{place: 'Kenya'},
			{place: 'Columbia'},
		]

	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		console.log(term);
		this.setState({
			term
		});
		this.props.onUpdateSearch(term);
	}
	
	render() {
		const {data} = this.props;
		const cards = data.map((item, i) => (
			<CardItem key={i} {...item} />
		));
		const buttons = this.buttons.map(({place}) => {
			const active = this.props.filter === place;
			const clazz = active ? 'cardFilter__btn_active': null;
			return <button type='button' 
						className={`cardFilter__btn ${clazz}`}
						key={place} 
						onClick={() => this.props.onButtonsFilter(place)}>
						{place}
					</button>
		})
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
							onChange={this.onUpdateSearch}/>
					</form>
					<div className='cardFilter__filter'>
						<span>Or filter</span>
						<div className='cardFilter__btn-wrapper'>
							{/* <button className='cardFilter__btn cardFilter__btn_active'>Brazil</button>
							<button className='cardFilter__btn'>Kenya</button>
							<button className='cardFilter__btn'>Columbia</button> */}
							{buttons}
						</div>
					</div>
				</div>
		
				<div className='cardFilter__card-wrapper'>
					{cards}
				</div>
		
				</section>
			</> 
		)
	}
};

export default CardFilter;