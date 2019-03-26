import React, { Component } from 'react'
import { ButtonToolbar} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {apiURL} from '../config';

export class DeleteCardButton extends Component {
    handleDelete = async () => {
        await fetch(`${apiURL}/task/${this.props.task._id}`, {
            method: 'DELETE'
        }).then(res  => console.log(res))
        .catch (err => console.log(err))
    };
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button style={styles.deleteButton}
                        variant="outlined"
                        size="sm"
                        onChange={this.handleDelete}
                    >
                        Delete
                </Button >
                </ButtonToolbar>
            </div>
        )
    }
};

const styles= {
    deleteButton:{
        margin: 8,
        justifyContent: "flex-end",
    }
};

export default DeleteCardButton;
