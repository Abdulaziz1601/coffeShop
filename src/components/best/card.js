
import './card.scss';

import card_1 from '../../assets/card_1.png';
import card_2 from '../../assets/card_2.png';
import card_3 from '../../assets/card_3.png';


const Card = () => {
	return (
        <section className='card'>
            <div className='card__wrapper'>
                <div className='card__item'>
                    <img className='card__img' src={card_1} alt='product' />
                    <div className='card__title'>
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className='card__price'>
                        10.73$
                    </div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={card_2} alt='product' />
                    <div className='card__title'>
                        Presto Coffee Beans 1 kg
                    </div>
                    <div className='card__price'>
                        15.99$
                    </div>
                </div>
                <div className='card__item'>
                    <img className='card__img' src={card_3} alt='product' />
                    <div className='card__title'>
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className='card__price'>
                        6.99$
                    </div>
                </div>
            </div>
        </section> 
	)
};

export default Card;