import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { apiURL } from '../config'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class UpdateCard extends Component {
    state = {
        _id: this.props.task._id,
        name: this.props.task.name,
        desc: this.props.task.desc,
        dueDate: this.props.task.dueDate
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    dateChange = async (date) => {
        this.setState({
            dueDate: date,
        })
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`${apiURL}/task/${this.props.task._id}`, {
            method: "PUT",
            body: JSON.stringify(this.state)
        }).then(res => console.log(res.json()))
            .then(() => this.setState({
                name: "",
                desc: "",
                dueDate: "",
            }))
            .then(() => this.props.closeUpdate())
            .then(() => this.props.refresh())
            .catch(err => console.log(err))
        this.props.onHide()
    }

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
                        {this.state.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group >
                            <input
                                style={styles.modal} 
                                type='text'
                                name="name"
                                placeholder='New Task...'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input 
                                style={styles.modal} 
                                type='text'
                                name="desc"
                                placeholder='Description...'
                                value={this.state.desc}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <DatePicker
                                name="dueDate"
                                todayButton={"Today"}
                                minDate={new Date()}
                                isClearable={true}
                                placeholderText="Due Date"
                                selected={this.state.dueDate}
                                onChange={this.dateChange}
                            />
                        </Form.Group>
                        <input type='submit' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};
const styles={
    modal:{
        width:"100%",
    }
};