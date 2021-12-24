import Heading from "../heading/heading";
import Logo from "../logo/logo";

import './aboutBeans.scss';

import girlImg  from '../../assets/coffeImg.jpg';

const AboutBeans = () => {
	return (
        <main className="aboutBeans" >
            <div className="aboutBeans__wrapper">
                <div className="aboutBeans__img">
                    <img src={girlImg} alt="girl holding cup of coffee" />
                </div>   
                
                <div className="aboutBeans__info">
                    <Heading type={"small"} text={"About our beans"} />
                    <Logo color={"black"}/>
                    <div className="aboutBeans__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </div>
                </div>   

            </div>
        </main>  
	)
};

export default AboutBeans;
