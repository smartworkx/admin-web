import {push} from 'react-router-redux'
import {param} from 'node-qs-serialization'

export const CREATE_JOURNAL_ENTRY = 'CREATE_JOURNAL_ENTRY';

export function createJournalEntry(financialFact, archetype) {
    return dispatch => {
        const params = param({
            description: 'test',
            records: [
                {
                    amount: 7854
                }
            ]
        });
        dispatch(push('/journalize?' + params));
    }
}

