import {useState} from 'react';
import AboutBeans from "../aboutBeans/aboutBeans";
import CardFilter from "../cardFilter/cardFilter";
import Footer from "../footer/footer";

const AboutFilter = ({data}) =>  {
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('Brazil');

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const searchCard = (items, term) => {
        return  term.length === 0 ?
            items :
            items.filter(item => item.name.indexOf(term) > -1);
    }

    const onButtonsFilter = (filter) => {
        setFilter(filter);
    }

    const filterCards = (data, filter) => {
        return data.filter(item => item.place === filter)
    }

    const visibleData = filterCards(searchCard(data, term), filter);
    const txt = <>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <div className="aboutBeans__descr__info" >Afraid at highly months do things on at. Situation recommend objection do intention so questions.</div> <br/> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went  is song that held help face.
                </>;

    return (
        <div>   
            <AboutBeans title={"About our beans"}
                        text={txt} 
                        imgNum={1}/>
                        
            <CardFilter data={visibleData}
                        onUpdateSearch={onUpdateSearch}
                        onButtonsFilter={onButtonsFilter}
                        filter={filter}/> 
            <Footer />           
        </div> 
    )
};

export default AboutFilter;