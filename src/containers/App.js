import React, {Component} from "react";
import {Home, Main} from "../components";
import Journalize from "./Journalize";
import VatReport from "./VatReport";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";


export default class App extends Component {

    render() {
        const {store} = this.props;

        const history = syncHistoryWithStore(browserHistory, store);

        return (
            <Router history={history}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}/>
                    <Route path="vatReport" component={VatReport}/>
                    <Route path="journalize" component={Journalize}/>
                </Route>
            </Router>
        );
    }
}
