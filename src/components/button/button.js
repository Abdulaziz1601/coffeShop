
import './button.scss';

const Button = ({type}) => {
    if(type === 'big') {
        return ( 
            <button className='btn_big'>
                More
            </button> 
        )
    }
};

export default Button;