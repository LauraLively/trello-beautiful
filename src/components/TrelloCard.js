import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UpdateButton from './UpdateCardButton';
import DeleteCardButton from './DeleteCardButton';

export class TrelloCard extends Component {
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
                <DeleteCardButton/>
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
    }
};
export default TrelloCard;
