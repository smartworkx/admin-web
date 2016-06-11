/**
 * Created by joris on 31-5-16.
 */
import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CHANGE_PERIOD = 'CHANGE_PERIOD'

function receivePosts(quarter, json) {
    return {
        type: RECEIVE_POSTS,
        quarter,
        report: json,
        receivedAt: Date.now()
    }
}

export function fetchPosts(period) {
    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://localhost:8080");
    return dispatch => {
        //dispatch(requestPosts(quarter))
        return fetch(`http://localhost:8080/vatReports?year=${period.year}&quarter=${period.quarter}`,
            {
                headers: headers
            }
        )
            .then(response => response.json())
            .then(json => dispatch(receivePosts(period, json)))
    }
}

export function handleChangePeriod(period){
    return {
        type: CHANGE_PERIOD,
        period
    }
}

