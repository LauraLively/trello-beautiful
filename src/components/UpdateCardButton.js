import React, { Component } from 'react'
import { ButtonToolbar} from 'react-bootstrap';
import UpdateCard from './UpdateCard'
import Button from '@material-ui/core/Button';

// This is the button for the Update Card modal. It is instantiated on the TrelloCard Component.
// Check chain of components to figure out why it won't work.

export default class UpdateButton extends Component {
state = { 
    modalShow: false 
};
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <ButtonToolbar styles="margin: 8px,">
        <Button style={styles.updateButton}
          variant="outlined"
          size="sm"
          onClick={() => this.setState({ modalShow: true })}
        >
          Update
        </Button >
        {/* This is where it gets the props for the update modal */}
        <UpdateCard task={this.props.task}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    )
  }
};
const styles = {
    updateButton: {
        margin:8,
        alignItems: "center",
    }
}