import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TrelloCard from './TrelloCard';
import { apiURL } from '../config';
import NewTaskButton from './NewTaskButton';
import Button from '@material-ui/core/Button';


// This is where the cards are fetched from the api

class TrelloList extends Component {
  state = {
    tasks: []
  };
  getTasks = async () => {
    await fetch(`${apiURL}/tasks/${this.props.list._id}`)
      .then(response => response.json())
      .then(data => data.map(element => <TrelloCard task={element} />))
      .then(components => this.setState({ task: components }))
      .catch(err => console.log(err))
  };
  componentDidMount() {
    this.getTasks()
  };
  componentDidUpdate() {
    this.getTasks()
  };

  render() {
    // this.props.list is here and needs to be followed throught the rest of the list components.
    const list = this.props.list;
    return (
      <Card style={styles.container}>
        <CardContent>
          <div style={styles.listHeader}>
            <h4>{list.title}</h4>
            <Button
              size="small"
              onClick={() => this.setState({ modalShow: true })}><h6>...</h6></Button>
            </div>
          <div >
            {this.state.task}
            <NewTaskButton listID={list._id} />
          </div>
          </CardContent>
      </Card>

    )
  }
}
const styles = {
  container: {
    backgroundColor: "#c8bfc7",
    borderRadius: 3,
    width: 300,
    margin: 10,
    height: "100%",
  },
  listHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin:5,
  }
};

export default TrelloList;
