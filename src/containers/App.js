import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import VatReport from '../components/VatReport';

import * as VatReportActions from '../actions/VatReportActions';

class App extends Component {
    render() {
        const {vatReport, dispatch} = this.props;
        return (
            <VatReport report={vatReport}
                {...bindActionCreators(VatReportActions, dispatch)} />
        );
    }
}

/*
 *<Counter counter={counter}
 {...bindActionCreators(CounterActions, dispatch)} />
 */

function mapStateToProps(state) {
    const {vatReport} = state;


    return {
        vatReport
    }
}

export default connect(mapStateToProps)(App);
