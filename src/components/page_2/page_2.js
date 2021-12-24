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
        return (
            <div>   
                <Header heading={"Our Coffee"} />
                <AboutBeans />
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