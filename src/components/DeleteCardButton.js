import React, { Component } from 'react'
import { ButtonToolbar} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export class DeleteCardButton extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button style={styles.deleteButton}
                        variant="outlined"
                        size="sm"
                        onClick={() => this.setState({ modalShow: true })}
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
