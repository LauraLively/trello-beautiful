import React, { Component } from 'react'
import { Button, ButtonToolbar} from 'react-bootstrap';
import NewList from './NewList'


export default class NewListButton extends Component {
state = { 
    modalShow: false 
};
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <ButtonToolbar>
        <Button
         style={styles.newListButton}
          onClick={() => this.setState({ modalShow: true })}
        >
          New List
        </Button>

        <NewList 
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    )
  }
};

const styles={
    newListButton:{
      backgroundColor:"#734b5e",
      color: "white",
      border: "none",
      width: "20rem",
      margin: 8,
      height: "3rem",

    }
  };