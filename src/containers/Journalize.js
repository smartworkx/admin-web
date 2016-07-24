import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import {Records} from "../components";
import {reduxForm, Field, FieldArray} from "redux-form";
import {submit} from "../actions/JournalizeActions";
import {fetchLedgers} from "../actions/LedgerActions";
import {connect} from "react-redux";


class Journalize extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const {fetchLedgers} = this.props;
        fetchLedgers();
    }

    render() {
        const {
            handleSubmit, submitting, reset, ledgers
        } = this.props;
        return (
            <form onSubmit={handleSubmit(submit)}>
                <FormGroup
                    controlId="description"
                >
                    <ControlLabel>Description</ControlLabel>
                    <Field className="form-control"
                           component="input" type="ẗext"
                           placeholder="Enter description"
                           name="description"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="description"
                >
                    <ControlLabel>Value date</ControlLabel>
                    <Field name="valueDate" component={props =>
                        <DatePicker
                            dateFormat="YYYY-MM-DD"
                            placeholder="Enter value date"
                            value={props.input.value}
                            onChange={e => props.input.onChange(e)}

                        />}/>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="amount"
                >
                    <ControlLabel>Amount</ControlLabel>
                    <Field
                        className="form-control"
                        component="input"
                        type="number"
                        placeholder="Enter amount"
                        name="amount"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FieldArray name="records" component={props =>
                    <Records
                        {...props} ledgers={ledgers}
                    />}/>
                <Button type="submit" disabled={submitting}>
                    {submitting ? <i/> : <i/>} Submit
                </Button>
                <Button disabled={submitting} onClick={reset}>
                    Clear Values
                </Button>
            </form>
        );
    }
}

const journalizeForm = reduxForm({
    form: 'journalize'
})(Journalize);

export default connect(
    state => ({ledgers: state.ledgers.rows}),
    {fetchLedgers}
)(journalizeForm)
