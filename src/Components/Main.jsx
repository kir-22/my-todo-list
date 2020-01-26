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
  render() {console.warn(style);
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
          <button className={style.button}>{'Добавить'}</button>
        </div>
        <div className={style.cardsContainer}>
          {this.state.cards.map(el=><Card/>)}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;