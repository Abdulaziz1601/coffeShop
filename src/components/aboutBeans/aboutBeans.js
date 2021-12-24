import Heading from "../heading/heading";
import Logo from "../logo/logo";

import './aboutBeans.scss';

import girlImg  from '../../assets/coffeImg.jpg';

const AboutBeans = ({title, text}) => {
	return (
        <main className="aboutBeans" >
            <div className="aboutBeans__wrapper">
                <div className="aboutBeans__img">
                    <img src={girlImg} alt="girl holding cup of coffee" />
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
