import React from 'react';
import Welcome from './Welcome';
import Main from './Main';
import LoginForm from './LoginForm';
import ApiCallData from './ApiCallData';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "First",
      last: "Last",
      microsoftValue: 100,
      twitterValue: 200,
      amazonValue: 300,
      values: [
        { "company": "Microsoft", "value": 100 },
        { "company": "Twitter", "value": 200 },
        { "company": "Amazon", "value": 300 },
        { "company": "Tyler", "value": 400 }
      ],
      email: '',
      password: '',
      isLoggedIn: false,
      stockData: []
    }
  }

  componentDidMount() {
    fetch("https://cloud.iexapis.com/stable/ref-data/market/us/exchanges?token=pk_174943f165c74eeea910e2473a39bf93")
      .then(response => response.json())
      .then(response => this.setState({
        stockData: response
      }))
    // .then(response => console.log(response))
  }

  increaseValues() {
    this.setState((prevState) => ({
      microsoftValue: prevState.microsoftValue + 1,
      twitterValue: prevState.twitterValue + 1,
      amazonValue: prevState.amazonValue + 1
    }))
  }

  decreaseValues() {
    this.setState((prevState) => ({
      microsoftValue: prevState.microsoftValue - 1,
      twitterValue: prevState.twitterValue - 1,
      amazonValue: prevState.amazonValue - 1
    }))
  }

  jumbleValues() {
    this.setState((prevState) => ({
      microsoftValue: prevState.amazonValue,
      twitterValue: prevState.microsoftValue,
      amazonValue: prevState.twitterValue
    }))
  }

  increaseValues2() {
    this.setState((prevState) => ({
      values: [
        { "company": "Microsoft", "value": prevState.values[0].value + 1 },
        { "company": "Twitter", "value": prevState.values[1].value + 1 },
        { "company": "Amazon", "value": prevState.values[2].value + 1 },
        { "company": "Tyler", "value": prevState.values[3].value + 1 }
      ]
    }))
  }

  decreaseValues2() {
    this.setState((prevState) => ({
      values: [
        { "company": "Microsoft", "value": prevState.values[0].value - 1 },
        { "company": "Twitter", "value": prevState.values[1].value - 1 },
        { "company": "Amazon", "value": prevState.values[2].value - 1 },
        { "company": "Tyler", "value": prevState.values[3].value - 1 }
      ]
    }))
  }

  jumbleValues2() {
    this.setState((prevState) => ({
      values: [
        { "company": "Microsoft", "value": prevState.values[3].value },
        { "company": "Twitter", "value": prevState.values[0].value },
        { "company": "Amazon", "value": prevState.values[1].value },
        { "company": "Tyler", "value": prevState.values[2].value }
      ]
    }))
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.first)
    console.log(this.state.last)
  }

  handleFormUpdate(values) {
    this.setState({
      email: values.email,
      password: values.password,
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div>
        <h1>Stock Data App</h1>
        <Welcome first={this.state.first} last={this.state.last} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name:
            <input type="text" name="first" value={this.state.first} onChange={this.handleChange.bind(this)} />
          </label>
          <label>Last Name:
            <input type="text" name="last" value={this.state.last} onChange={this.handleChange.bind(this)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Main
          values={this.state.values}
          microsoftValue={this.state.microsoftValue}
          twitterValue={this.state.twitterValue}
          amazonValue={this.state.amazonValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)} />
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)} />
        {
          this.state.isLoggedIn ?
          <p>Thanks for logging in!</p> :
          <p>Please login above.</p>
        }
        <ApiCallData stockData={this.state.stockData} />
      </div>

    )
  }
}

export default App;
