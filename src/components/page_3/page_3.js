import AboutBeans from "../aboutBeans/aboutBeans";
import Footer from "../footer/footer";
import Header from "../header/header"
;
import './page_3.scss';

const Page_3 = () => {
    const txt = <div className="aboutBeans__descr_left" >
                    <div><strong>Country:</strong> Brasil</div>
                    <div className="aboutBeans__descr__info"><strong>Description</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="aboutBeans__descr__place"><strong>Price:</strong>  16.99$</div>
                </div>;


    return (
        <div>   
            <Header heading={"Our Coffee"} />
            <AboutBeans title={'About it'}
                        text={txt}
                        imgNum={2}/>
                        
            <Footer />           
        </div> 
    )
};

export default Page_3;