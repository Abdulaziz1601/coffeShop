import { Component } from "react";

import Page_1 from "../page_1/page_1";
import Page_2 from "../page_2/page_2";
import Page_3 from "../page_3/page_3";
import Page_4 from "../page_4/page_4";
import './app.scss';

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
            <Page_1 data={this.state.data}/>
        )
    }
};

export default App;