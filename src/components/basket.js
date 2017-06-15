import React, { Component } from 'react';
import {actionRemoveFromBasket, actionHistory} from "../actions/actions.js";
import '../App.css';
import {connect} from "react-redux";


 class Basket extends Component {
  render() {
    let i = 0;
    const productList = this.props.basket.map(p => <li key={i++}>{p.name}, {p.price}:- <br /> <img src={p.image}/><br />
    <button onClick={()=>this.handleClickRemoveFromBasket(p)}>Remove from cart</button>
    </li>);
    let sum = 0;
    this.props.basket.forEach(p => {
          sum += p.price;
    });                                          
    
    return (
        <div>
            <p>Your cart:</p>
            <ol>
                {productList}
            </ol>
            <div>Products in cart: {productList.length}</div> 
            <div>Total sum: {sum}:-</div>                                                 
        </div>
        
    );
  }
   
handleClickRemoveFromBasket(removeFromBasket) {
      let action = actionRemoveFromBasket(removeFromBasket);
      this.props.dispatch(action);
      this.props.dispatch(actionHistory(action));
    }                                                
}


export default connect()(Basket);