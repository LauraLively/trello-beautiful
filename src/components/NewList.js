import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { apiURL } from '../config'


export default class NewList extends Component {
    state = {
        title: "",
    };

    handleChange = async (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        // let data = this.state; 
        await fetch(`${apiURL}/list`, {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then(res => console.log(res.json()))
            .then(() => this.setState({
                title: "",
            }))
            .catch(err => console.log(err));
        // console.log(data)
        this.props.onHide();
    };

    render() {
        return (
            <Modal
                {...this.props}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       New List
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group>
                            <input 
                                style={styles.modal}
                                type='text'
                                name="title"
                                placeholder='New List...'
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <input type='submit' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
};
const styles={
    modal:{
        width:"100%",
    }
};