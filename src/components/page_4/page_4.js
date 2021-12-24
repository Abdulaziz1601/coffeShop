import AboutBeans from "../aboutBeans/aboutBeans";
import Aboutus from "../aboutus/aboutus";
import Best from "../best/best";
import CardFilter from "../cardFilter/cardFilter";
import CardItem from "../cardItem/cardItem";
import Footer from "../footer/footer";
import Header from "../header/header";
import Poster from "../poster/poster";
import './page_4.scss';

const Page_4 = (props) => {
    return (
        <div>   
            <Header heading={"For your pleasure"} />
            <AboutBeans title={'About our goods'} text={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. \n\n Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'} />
            <Footer />           
        </div> 
    )
};

export default Page_4;