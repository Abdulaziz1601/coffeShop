import Heading from "../heading/heading";
import Logo from "../logo/logo";
import Best from "../best/best";
import Footer from "../footer/footer";
import Poster from "../poster/poster";
import './page_1.scss';

const Page_1 = () => {
	return (
        <>
            <Poster/> 
            <main className="aboutus" >
                <Heading type="small" text="About Us"/>
                <Logo color={"black"} />
                <div className="aboutus__info">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </div>
                <div className="aboutus__info">
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </main>  
            <Best/> 
            <Footer/>
        </> 
	)
};

export default Page_1;