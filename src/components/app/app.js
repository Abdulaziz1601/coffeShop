import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../header/header";
import {About, AboutMini, AboutFilter, AllProducts} from '../pages'

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
            <Router>
                <div className="app">
                <Header heading={"Our Coffee"} />
                <main>
                    <Switch>
                        {/* Compares the exact routes */}
                        <Route exact path="/">
                           <About data={this.state.data} />
                        </Route>
                        <Route exact path="/aboutFilter">
                           <AboutFilter data={this.state.data} />
                        </Route>
                        <Route exact path="/aboutMini">
                            <AboutMini data={this.state.data} />
                        </Route>
                        <Route exact path="/allProducts">
                            <AllProducts data={this.state.data} />
                        </Route>
                    </Switch>
                </main>
            </div>
            </Router>
        )
    }
};

export default App;