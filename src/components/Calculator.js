import React, { Component } from "react"

class Calculator extends Component {
  constructor() {
    super()

    this.state = {
      value1: null,
      value2: null,
      result: null
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(`input value: ${event.target.name}`)
    console.log(`input value: ${event.target.value}`)
    // const {
    //   target: { value1: num1, value2: num2 }
    // } = event

    this.setState([value1:])

    console.log(`First Number: ${num1}`)
    console.log(`Second Number: ${num2}`)
    // this.setState({ [num1]: [num2] })
  }

  //created a function a that would added the two numbers on click
  addNums() {
    this.state.results = this.state.num1 + this.state.num2
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("Submitting form")
    console.log(`${this.state.value1} + ${this.value.value2}`)
  }

  render() {
    const { value1, value2 } = this.state
    return (
      <div>
        <h1>Enter your values</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Value One: </label>
            <input
              onChange={this.handleChange}
              type="number"
              value={value1}
              name="value1"
            />
          </div>
          <div>
            <label>Value Two: </label>
            <input
              onChange={this.handleChange}
              type="number"
              value={value2}
              name="value2"
            />
          </div>
          <button onClick={this.addNums}>Add the numbers</button>
        </form>
      </div>
    )
  }
}

export default Calculator
