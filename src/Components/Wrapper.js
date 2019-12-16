import React, { Component } from "react";
import Element from "./Element";
import Nav from "./Nav";

class Wrapper extends Component {
  // Setting the component's initial state
  state = {
    elements: [
      { img: "./img/00.png", id: "a" },
      { img: "./img/01.jpg", id: "b" },
      { img: "./img/02.jpg", id: "c" },
      { img: "./img/03.jpg", id: "d" },
      { img: "./img/04.jpg", id: "e" },
      { img: "./img/05.jpg", id: "f" },
      { img: "./img/06.jpg", id: "g" },
      { img: "./img/07.jpg", id: "h" },
      { img: "./img/08.jpg", id: "i" },
      { img: "./img/09.jpg", id: "j" },
      { img: "./img/10.png", id: "k" },
      { img: "./img/11.jpg", id: "l" }
    ],
    clickedElements: [],
    score: 0,
    highScore: 0,
    lost: false
  };
  handleOnClick = event => {
    //   console.log("hello")

    // Getting the value and name of the input which triggered the change
    const { id } = event.target;
    this.state.clickedElements.forEach(element => {
      if (id === element.id) {
        this.setState({ lost: true });
      }
    });

    if (!this.state.lost) {
      this.setState({ score: this.state.score + 1 });

      this.shuffle();
      this.state.clickedElements.push({ id: id });
    }
  };
  shuffle = () => {
    const a = this.state.elements;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return this.setState(a);
  };

  reset = () => {
    if (this.state.highScore < this.state.score) {
      this.setState({ highScore: this.state.score });
    }
    this.setState({
      elements: [
        { img: "./img/00.png", id: "a" },
        { img: "./img/01.jpg", id: "b" },
        { img: "./img/02.jpg", id: "c" },
        { img: "./img/03.jpg", id: "d" },
        { img: "./img/04.jpg", id: "e" },
        { img: "./img/05.jpg", id: "f" },
        { img: "./img/06.jpg", id: "g" },
        { img: "./img/07.jpg", id: "h" },
        { img: "./img/08.jpg", id: "i" },
        { img: "./img/09.jpg", id: "j" },
        { img: "./img/10.png", id: "k" },
        { img: "./img/11.jpg", id: "l" }
      ],
      clickedElements: [],
      score: 0,
      lost: false
    });
  };

  render() {
    let page;
    if (this.state.lost) {
      page = (
        <div class="card">
          <div class="card-header">Score : {this.state.score}</div>

          <div class="card-header">High Score : {this.state.highScore}</div>
          <div class="card-body">
            <button className="btn btn-danger" onClick={this.reset}>
              Rest Game
            </button>
          </div>
        </div>
      );
    } else {
      page = this.state.elements.map(result => (
        <div style={{ height: "300px", width: "25%" }} key={result.id}>
          <Element
            value={result.img}
            id={result.id}
            onClick={this.handleOnClick}
          />
        </div>
      ));
    }

    return (
      <div className="row w-100 justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12">
            <Nav
              lost={this.state.lost}
              reset={this.reset}
              highScore={this.state.highScore}
              score={this.state.score}
            />
          </div>
          {page}
        </div>
      </div>
    );
  }
}

export default Wrapper;
