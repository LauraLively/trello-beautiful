import React, { Component } from 'react';
import TrelloList from './TrelloList'
import { apiURL } from '../config';
import NewListButton from './NewListButton';

// This is where the lists are fetched from the api.

export class TrelloBoard extends Component {
    state={
        lists:[],
    }
    getLists = async () => {
        await fetch(`${apiURL}/lists`)
            .then(response => response.json())
            .then(data => data.map(element => <TrelloList list={element} />))
            .then(components => this.setState({ list: components }))
            .catch(err => console.log(err))
    };
    componentDidMount() {
        this.getLists()
      };
      componentDidUpdate() {
        this.getLists()
      };

  render() {
    return (
      <div style={styles.boardLayout}>
          {this.state.list}
          <NewListButton />
      </div>
    )
  }
};

const styles={
    boardLayout:{
        display:"flex",
        flexDirection:"row"
    },
  };
export default TrelloBoard;
