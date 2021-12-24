import AboutBeans from "../aboutBeans/aboutBeans";
import Aboutus from "../aboutus/aboutus";
import Best from "../best/best";
import CardFilter from "../cardFilter/cardFilter";
import CardItem from "../cardItem/cardItem";
import Footer from "../footer/footer";
import Header from "../header/header";
import Poster from "../poster/poster";
import './page_2.scss';

const Page_2 = ({data}) => {
	return (
        <div>   
            <Header heading={"Our Coffee"} />
            <AboutBeans />
            <CardFilter data={data} />            
        </div> 
	)
};

export default Page_2;