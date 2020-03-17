import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    balance: 100,
    sushis: [],
    plates: [],
    showWForm: false,
  }

  toggleForm = () => {
    this.setState({showWForm: !this.state.showWForm})
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis: sushis}))
  }

  eatSushi = (sushi) => {
    console.log(sushi)
    let newSushi = {...sushi}
    if (newSushi.price <= this.state.balance) {
    newSushi.eaten = true
    this.setState({
      balance: this.state.balance - newSushi.price,
      plates: [...this.state.plates, newSushi],
      sushis: this.state.sushis.map(sushi => (sushi.id === newSushi.id ? newSushi : sushi))
    })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      balance: this.state.balance + parseInt(e.target.balance.value),
      showWForm: false,
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} toggleForm={this.toggleForm} eatSushi={this.eatSushi}/>
        <Table balance={this.state.balance} plates={this.state.plates}/>
        {this.state.showWForm ? <Form handleSubmit={this.handleSubmit} /> : null}
      </div>
    );
  }
}

export default App;