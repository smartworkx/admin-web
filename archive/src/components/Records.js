/**
 * Created by joris on 31-5-16.
 */
import React, {Component} from "react";
import Record from "./Record";
import {Row, Button} from "react-bootstrap";


export default class Records extends Component {

    render() {
        const {fields, ledgers} = this.props;
        return (
            <div>
                <Row>
                    <Button onClick={() => fields.push({})}>Add record</Button>
                </Row>
                {fields.map((record, index) =>
                    <Record key={index} index={index} fields={fields} record={record}
                            ledgers={ledgers}/>
                )}
            </div>
        );
    }
}