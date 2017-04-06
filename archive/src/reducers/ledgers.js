import {RECEIVE_LEDGERS} from "../actions/LedgerActions";

export default function ledgers(state = {
    rows: []
}, action) {
    switch (action.type) {
        case RECEIVE_LEDGERS:
            return Object.assign({}, state, {
                rows: action.rows
            });
        default:
            return state
    }
}