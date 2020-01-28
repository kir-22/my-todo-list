import React, { Component } from 'react';
import Card from './Card.jsx';
import style from './Main.module.css';

class Main extends Component {
  state={
    message:'',
    cards: [],
  }
  changeText = ({target:{id, value}})=>{
    this.setState({
      [id]: value,
    });
  };
  addStick = () => {
    this.state.cards.push(this.state.message);
    this.setState({
      message: '',
      cards: this.state.cards,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={style.container}>
          <input
            className={style.inputText}
            id='message'
            type='text'
            onChange={this.changeText}
            value={this.state.message}
          />
          <button
            className={style.button}
            onClick = {this.addStick}
          >{'Добавить'}</button>
        </div>
          <Card cards={this.state.cards} />
      </React.Fragment>
    );
  }
}

export default Main;
