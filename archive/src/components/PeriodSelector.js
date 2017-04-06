/**
 * Created by joris on 31-5-16.
 */
import React, {Component, PropTypes} from 'react';

export default class PeriodSelector extends Component {

    render() {
        const {handleClick, handleChangePeriod, period } = this.props;
        return (
            <div>
                Year:<input onChange={e => handleChangePeriod(e, 'year')} type="number" value={period.year} />
                Quarter:<input onChange={e => handleChangePeriod(e, 'quarter')}  type="number" value={period.quarter}/>
                <button onClick={e => handleClick()}>Get</button>
            </div>
        );
    }
}