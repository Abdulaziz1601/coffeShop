import Aboutus from "../aboutus/aboutus";
import Best from "../best/best";
import Footer from "../footer/footer";
import Poster from "../poster/poster";
import './page_1.scss';

const Page_1 = () => {
	return (
        <>
            <Poster/>
            <Aboutus/>
            <Best/> 
            <Footer/>
        </> 
	)
};

export default Page_1;