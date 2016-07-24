/**
 * Created by joris on 31-5-16.
 */
import React, {Component} from "react";
import {Row, FormGroup, ControlLabel, Button} from "react-bootstrap";
import {Field} from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";

export default class Record extends Component {

    render() {
        const {fields, record, index, ledgers} = this.props;
        return (
            <Row className="form-inline">
                <Button
                    title="Remove Record"
                    onClick={() => fields.remove(index)}>Remove</Button>
                <FormGroup controlId="ledger">
                    <ControlLabel>Ledger</ControlLabel>
                    <Field name={`${record}.ledger`} component={ props =>
                        <DropdownList className="form-control" defaultValue={ledgers[0].id} data={ledgers} valueField="id"
                                      textField="name" onChange={value => props.input.onChange(value.id)}
                                      value={props.input.value}  />}
                    />
                </FormGroup>
                {' '}
                <FormGroup controlId="debitCredit">
                    <ControlLabel>Debit credit</ControlLabel>
                    {' '}
                    <Field className="form-control" component="select" name={`${record}.debitCredit`}
                    >
                        <option></option>
                        <option value="DEBIT">Debit</option>
                        <option value="CREDIT">Credit</option>
                    </Field>
                </FormGroup>
                {' '}
                <FormGroup controlId="amount">
                    <ControlLabel>Amount</ControlLabel>
                    {' '}
                    <Field className="form-control" component="input" type="number" name={`${record}.amount`}/>
                </FormGroup>
            </Row>
        );
    }
}