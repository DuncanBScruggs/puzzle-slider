import React, { Component } from 'react';
import Tiles from "./Tiles";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { index: 0, id: 0, click: false }, { index: 1, id: 1, click: false }, { index: 2, id: 2, click: false }, { index: 3, id: 3, click: false },
        { index: 4, id: 4, click: false }, { index: 5, id: 5, click: false }, { index: 6, id: 6, click: false }, { index: 7, id: 7, click: false },
        { index: 8, id: 8, click: false }, { index: 9, id: 9, click: false }, { index: 10, id: 10, click: false }, { index: 11, id: 11, click: false },
        { index: 12, id: 12, click: false }, { index: 13, id: 13, click: false }, { index: 14, id: 14, click: false }, { index: 15, id: 15, click: false },
      ],
    }
    this.moveTile = this.moveTile.bind(this)
  }

  scramble() {

    for (let i = 0; i < 50; i++) {
      let valid = this.state.data.filter((item, index) => {
        if (item.click) {
          item["index"] = index
          return item
        }
      })
      let rand = (Math.floor(Math.random() * valid.length))

      this.moveTile(valid[rand].index)
    }
  }

  checkWin() {
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id !== i) {
        return false;
      }
    }
    alert("you win")
    return true;
  }

  moveTile(index) {
    console.log(index)
    if (this.state.data[index].click) {
      let indexOfBlank = this.state.data.findIndex((item) => item.id === 15)
      let copy = this.state.data;
      let temp = copy[index];
      copy[index] = copy[indexOfBlank];
      copy[indexOfBlank] = temp;
      this.setState({ data: copy })
      this.setClickable()
      this.checkWin()
    }
  }

  setClickable() {
    let indexOfBlank = this.state.data.findIndex((item) => {
      return item.id === 15
    })

    let copy = this.state.data.map((item, index) => {
      if (indexOfBlank === 3 || indexOfBlank === 7 || indexOfBlank === 11) {
        if (index === indexOfBlank - 1 || index === indexOfBlank + 4 || index === indexOfBlank - 4) {
          item.click = true
        }
        else {
          item.click = false
        }
      }
      else if (indexOfBlank === 4 || indexOfBlank === 8 || indexOfBlank === 12) {
        if (index === indexOfBlank + 1 || index === indexOfBlank + 4 || index === indexOfBlank - 4) {
          item.click = true
        }
        else {
          item.click = false
        }
      }
      else if (index === indexOfBlank + 1 || index === indexOfBlank - 1 || index === indexOfBlank + 4 || index === indexOfBlank - 4) {
        item.click = true
      }
      else {
        item.click = false
      }
      return item
    })
    this.setState({ data: copy })
  }

  componentDidMount() {

    this.setClickable()

    // let data = window.localStorage.getItem("data")

    // if (data) {
    // console.log("found data, ")
    //   this.setState({ data: JSON.parse(data) })
    // }
    // else {
    // console.log("did not find currentPage")
    //   window.localStorage.setItem("data", JSON.stringify(this.state.data))
    // }
  }

  // componentDidUpdate() {
  // console.log("in componentDidUpdate")
  //   window.localStorage.setItem("data", JSON.stringify(this.state.data))
  // }

  render() {
    return (
      <div class="brand-main">


        <Tiles
          data={this.state.data}
          moveTile={this.moveTile}
        />


        <div class="row d-flex justify-content-center mt-5">
          <button class="btn btn-secondary" onClick={() => this.scramble()} >Scramble!</button>
        </div>
      </div>
    );
  }
}

export default App;
