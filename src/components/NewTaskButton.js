import React, { Component } from 'react'
import { Button, ButtonToolbar} from 'react-bootstrap';
import NewCard from './NewCard'
export default class NewTaskButton extends Component {
state = { 
    modalShow: false 
};
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <ButtonToolbar>
        <Button
         style={styles.newTaskButton}
          onClick={() => this.setState({ modalShow: true })}
        >
          New Task
        </Button>

        <NewCard listID={this.props.listID}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    )
  }
};

const styles={
    newTaskButton:{
      backgroundColor:"#734b5e",
      color: "white",
      border: "none",
      width: "100%"
    }
  }