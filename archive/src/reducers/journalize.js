import {CHANGE_JOURNAL_ENTRY, JOURNAL_ENTRY_SUBMITTED, ADD_RECORD, CHANGE_RECORD} from "../actions/JournalizeActions";

export default function journalize(state = {
    form: {},
    records: []
}, action) {
    switch (action.type) {
        case JOURNAL_ENTRY_SUBMITTED:
            return Object.assign({}, state, {
                message: 'Journal entry is saved'
            });
        case CHANGE_JOURNAL_ENTRY:
            const o = {};
            o[action.name] = action.value;
            return Object.assign({}, state, {
                form: Object.assign({}, state.form, o)
            });
        case ADD_RECORD:
            return Object.assign({}, state, {
                records: [
                    ...state.records,
                    {
                        seq: state.records.length + 1
                    }
                ]
            });
        case CHANGE_RECORD:
            return state;
        default:
            return state
    }
}