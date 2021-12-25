import { Component } from "react/cjs/react.production.min";
import AboutBeans from "../aboutBeans/aboutBeans";
import Aboutus from "../aboutus/aboutus";
import Best from "../best/best";
import CardFilter from "../cardFilter/cardFilter";
import CardItem from "../cardItem/cardItem";
import Footer from "../footer/footer";
import Header from "../header/header";
import Poster from "../poster/poster";
import './page_2.scss';

class Page_2 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            filter: 'Brazil'
        }
    }

    

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchCard = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter(item => (
            item.name.indexOf(term) > -1
        ))
    }


    onButtonsFilter = (filter) => {
        this.setState({filter});
    }

    filterCards = (data, filter) => {
        return data.filter(item => item.place === filter)
    }


    render() {
        const {filter, term} = this.state;
        const {data} = this.props;
        const searchedData = this.searchCard(data, term);
        const visibleData = this.filterCards(searchedData, filter);
        const txt = <>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <div className="aboutBeans__descr__info" >Afraid at highly months do things on at. Situation recommend objection do intention so questions.</div> <br/> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went  is song that held help face.
                    </>
        return (
            <div>   
                <Header heading={"Our Coffee"} />
                <AboutBeans title={"About our beans"}
                            text={txt} 
                            imgNum={1}/>
                <CardFilter data={visibleData}
                            onUpdateSearch={this.onUpdateSearch}
                            onButtonsFilter={this.onButtonsFilter}
                            filter={filter}/> 
                <Footer />           
            </div> 
        )
    } 
};

export default Page_2;