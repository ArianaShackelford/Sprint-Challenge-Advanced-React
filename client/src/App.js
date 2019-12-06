import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    players: []
  }

componentDidMount(){
  axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({players: response.data})
    })
}

  render(){
  return (
    <div className="App">
     <h1>Player info</h1>
     <PlayerList players={this.state.players}/>
    </div>
  )};
}

export default App;
