import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UpdateButton from './UpdateCardButton';
import Button from '@material-ui/core/Button';
import {apiURL} from '../config';

export class TrelloCard extends Component {
    handleDelete = async () => {
        await fetch(`${apiURL}/task/${this.props.task._id}`, {
            method: 'DELETE'
        }).then(res  => console.log(res))
        .catch (err => console.log(err))
    };
    render() {
        // I made this.props.task here and it needs to be followed through the rest of the components.
        const task = this.props.task;
        let displayDate = '';
        if (task.dueDate !== undefined) { displayDate = task.dueDate.substring(0, 10) }
        return (
            <Card style={styles.cardContainer}>
                <CardContent style={styles.cardContent}>
                    <h6>{task.name}</h6>
                    Due Date: {displayDate}
                </CardContent>
                <div style={styles.cardButtons} >
                {/* this is where this button is instatiated go down the chain to figure out how it works */}
                {/* this is where the this.props.task needs to go  */}
                <UpdateButton task={this.props.task} /> 
                <Button style={styles.deleteButton}
                        variant="outlined"
                        size="sm"
                        onClick={this.handleDelete} >
                        Delete
                </Button >
                </div>
            </Card>
        )
    }
};
const styles = {
    cardContainer: {
        marginBottom: 5,
    },
    cardButtons: {
        display: "flex",
        justifyContent: "space-between",
        margin:5,
    }, 
    cardContent : {
        padding:5,
    },
    deleteButton: {
        margin: 8,
        justifyContent: "flex-end",
    }
};
    
export default TrelloCard;
