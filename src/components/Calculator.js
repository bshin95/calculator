import React, { Component } from "react"

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value1: "",
      value2: "",
      result: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.addNums = this.addNums.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    // console.log(this.state.value1)
    // console.log(this.state.value2)
  }

  addNums() {
    this.setState({
      result: Number(this.state.value1) + Number(this.state.value2)
    })
  }

  render() {
    return (
      <div>
        <h1>Enter your values</h1>
        <div>
          <label>Value One: </label>
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.value1}
            name="value1"
          />
        </div>
        <div>
          <label>Value Two: </label>
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.value2}
            name="value2"
          />
        </div>
        <button onClick={this.addNums}>Add the numbers</button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Calculator
