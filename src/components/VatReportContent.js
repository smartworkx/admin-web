/**
 * Created by joris on 31-5-16.
 */
import React, {Component, PropTypes} from 'react';

export default class VatReportContent extends Component {
    static propTypes = {};

    render() {
        const {report} = this.props;

        var content;

        if (report.report) {
            content = (
                <div>
                    <div>Services taxed</div>
                    <div>{report.report.taxedAmount}</div>
                    <div>Voorbelasting</div>
                    <div>{report.report.taxPaid}</div>
                </div>);
        } else {
            content = <div>Select quarter</div>;
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}