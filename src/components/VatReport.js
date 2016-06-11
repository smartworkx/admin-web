/**
 * Created by joris on 31-5-16.
 */
import React, {Component, PropTypes} from 'react';

import VatReportContent from './VatReportContent';
import PeriodSelector from './PeriodSelector';

export default class VatReport extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangePeriod = this.handleChangePeriod.bind(this);
    }

    handleClick() {
        const {report, fetchPosts} = this.props;
        fetchPosts(report.period);
    }

    handleChangePeriod(e, name) {
        const {handleChangePeriod, report} = this.props;
        report.period[name] = e.target.value;
        handleChangePeriod(report.period)
    }

    render() {
        const {report} = this.props;
        return (
            <div>
                <h1>Vat Report</h1>
                <PeriodSelector period={report.period} handleClick={this.handleClick} handleChangePeriod={this.handleChangePeriod} />
                <VatReportContent report={report}/>
            </div>
        );
    }
}