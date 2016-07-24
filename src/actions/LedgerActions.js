import fetch from "isomorphic-fetch";

export const RECEIVE_LEDGERS = 'RECEIVE_LEDGERS';

function receive(rows) {
    return {
        type: RECEIVE_LEDGERS,
        rows
    }
}

export function fetchLedgers() {
    return (dispatch, getState) => {
        if (getState().ledgers.rows.length == 0) {
            return fetch(application_config.ADMIN_API_ENDPOINT + `/ledgers`)
                .then(response => response.json())
                .then(rows => dispatch(receive(rows)))
        }
    }
}
