import card_1 from '../../assets/card_1.png';

import './card.scss';


const Card = ({name, place, price}) => {
	return (
        <div className='card'>
                <div className='card__item cardItem_big'>
                    <img className='card__img' src={card_1} alt='product' />
                    <div className='card__title'>
                        {name}
                    </div>
                    <div className='cardItem__place'>
                        {place}
                    </div>
                    
                    <div className='card__price'>
                        {price}
                    </div>
                </div>
        </div> 
	)
};

export default Card ;