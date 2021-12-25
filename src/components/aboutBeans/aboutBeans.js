import Heading from "../heading/heading";
import Logo from "../logo/logo";

import './aboutBeans.scss';

import girl  from '../../assets/coffeImg.jpg';
import product  from '../../assets/product.jpg';
import hotCoffe  from '../../assets/cup.png';

const AboutBeans = ({title, text, imgNum=1}) => {
    let img;
    if(imgNum === 1) {
        img = girl; 
    }
    if(imgNum === 2) {
        img = product; 
    }
    if(imgNum === 3) {
        img = hotCoffe; 
    }
    return (
        <main className="aboutBeans" >
            <div className="aboutBeans__wrapper">
                <div className="aboutBeans__img">
                    <img src={img} alt="girl holding cup of coffee" />
                </div>   
                
                <div className="aboutBeans__info">
                    <Heading type={"small"} text={title} />
                    <Logo color={"black"}/>
                    <div className="aboutBeans__descr">
                        {text}
                    </div>
                </div>   

            </div>
        </main>  
	)
};

export default AboutBeans;
