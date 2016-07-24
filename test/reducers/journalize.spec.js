import expect from "expect";
import deepFreeze from "deep-freeze";
import journalize from "../../src/reducers/journalize";
import {CHANGE_JOURNAL_ENTRY} from "../../src/actions/JournalizeActions";

describe('reducers', () => {
    describe('journalize', () => {

        it('should change the form', () => {
            const state = {
                form: {
                    records: []
                }
            };

            deepFreeze(state);

            const newState = journalize(state, {
                type: CHANGE_JOURNAL_ENTRY,
                name: 'amount',
                value: 10
            });

            expect(newState.form.amount).toEqual(10);

        })
    })
});