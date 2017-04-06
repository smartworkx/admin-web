import {
    REQUEST_POSTS, RECEIVE_POSTS, CHANGE_PERIOD
} from '../actions/VatReportActions'

export default function vatReport(state = {
    period: {
        year: 2016,
        quarter: 2
    },
    isFetching: false,
    report: null
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                report: action.report,
                lastUpdated: action.receivedAt
            });
        case CHANGE_PERIOD:
            return Object.assign({}, state, {
                period: action.period
            });
        default:
            return state
    }
}
