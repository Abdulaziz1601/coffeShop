import { Component } from "react";

import Aboutus from "../aboutus/aboutus";
import Best from "../best/best";
import Footer from "../footer/footer";
import Poster from "../poster/poster";
import Page_1 from "../page_1/page_1";
import Page_2 from "../page_2/page_2";
import './app.scss';
import Page_4 from "../page_4/page_4";

class App extends Component {
    state = {
        data : [
            { name: "AROMISTICO Coffee 1 kg", place: "Brazil", price: "6.99$" },
            { name: "Nescaffe Coffee 1 kg", place: "Kenya", price: "6.99$" },
            { name: "Mccoffe Coffee 1 kg", place: "Columbia", price: "6.99$" },
            { name: "Abdulaziz Coffee 1 kg", place: "Brazil", price: "6.99$" },
            { name: "Chamberlen Coffee 1 kg", place: "Brazil", price: "6.99$" },
            { name: "Gold Coffee 1 kg", place: "Brazil", price: "6.99$" }
        ]
    }

    render() {
        return (
            <Page_4 data={this.state.data}/>
        )
    }
};

export default App;