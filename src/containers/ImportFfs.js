import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {createJournalEntry} from '../actions/ImportFfsActions'


class ImportFfs extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        const {createJournalEntry} = this.props;
        return (
            <Button onClick={ e => createJournalEntry() }>
                Import
            </Button>
        );
    }
}

export default connect(
    state => ({}),
    {createJournalEntry}
)(ImportFfs)
