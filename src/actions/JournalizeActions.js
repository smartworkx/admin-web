/**
 * Created by joris on 31-5-16.
 */
import fetch from "isomorphic-fetch";

export const CHANGE_JOURNAL_ENTRY = 'CHANGE_JOURNAL_ENTRY';
export const JOURNAL_ENTRY_SUBMITTED = 'JOURNAL_ENTRY_SUBMITTED';
export const ADD_RECORD = 'ADD_RECORD';
export const CHANGE_RECORD = 'CHANGE_RECORD';

function journalEntrySubmitted(response) {
    return {
        type: JOURNAL_ENTRY_SUBMITTED,
        response: response
    }
}

export function submit(values) {
    console.log('Submitting: ' + JSON.stringify(values));
    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://localhost:8080");
    headers.append('Content-Type', 'application/json');
    return fetch(application_config.ADMIN_API_ENDPOINT + `/journalEntries`,
        {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(values)
        }
    )
        .then(response => response.json())
        .then(json => dispatch(journalEntrySubmitted(json)))

}
