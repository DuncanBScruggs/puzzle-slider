import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 0, click: false }, { id: 1, click: false }, { id: 2, click: false }, { id: 3, click: false },
        { id: 4, click: false }, { id: 5, click: false }, { id: 6, click: false }, { id: 7, click: false },
        { id: 8, click: false }, { id: 9, click: false }, { id: 10, click: false }, { id: 11, click: false },
        { id: 12, click: false }, { id: 13, click: false }, { id: 14, click: false }, { id: 15, click: false },
      ],
    }
  }

  checkWin() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.state.data[i].id !== i) {
        return false;
      }
    }
    return true;
  }

  setClickable() {
    console.log("in setClickable, ")

    let indexOfBlank = this.state.data.findIndex((item) => item.id === 15)

    let copy = this.state.data.map((item, index) => {
      if (index === indexOfBlank + 1 || index === indexOfBlank - 1 || index === indexOfBlank + 4 || index === indexOfBlank - 4){
        item.click = true
      }
      else{ 
        item.click = false
      }
    })
    this.setState({data: copy})
  }

  componentDidMount() {
    let data = window.localStorage.getItem("data")

    if (data) {
      console.log("found data, ")
      this.setState({ data: JSON.parse(data) })
    }
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate")
    window.localStorage.setItem("data", JSON.stringify(this.state.data))
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default App;
