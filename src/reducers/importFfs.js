import {CREATE_JOURNAL_ENTRY} from "../actions/ImportFfsActions";
import {push} from 'react-router-redux'

export default function ledgers(state = {
    rows: []
}, action) {
    switch (action.type) {
        case CREATE_JOURNAL_ENTRY:
            return Object.assign({}, state, {
                rows: action.rows
            });
        default:
            return state
    }
}