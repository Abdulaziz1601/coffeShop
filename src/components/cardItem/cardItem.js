
import './cardItem.scss';

import card_1 from '../../assets/card_1.png';
import card_2 from '../../assets/card_2.png';
import card_3 from '../../assets/card_3.png';


const CardItem = ({name, place, price}) => {
	return (
        <div className='card'>
                <div className='card__item cardItem_big'>
                    <img className='card__img' src={card_1} alt='image of our product' />
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

export default CardItem ;