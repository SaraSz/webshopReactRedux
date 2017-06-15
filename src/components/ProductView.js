import React, {Component} from "react";
import {actionAddToBasket, actionHistory} from "../actions/actions.js";
import {connect} from "react-redux";


class ProductView extends Component {
    render(){
    let i = 0;
    const productList = this.props.products.map(p => <li key={i++}>{p.name}, {p.price}:- <br /> <img src={p.image}/><br/>
    <button onClick={()=>this.handleClickAddToBasket(p)}>Add to cart</button></li>);
  return <ol>{productList}</ol> }
  
                                                
handleClickAddToBasket(productToBasket) {
      let action = actionAddToBasket(productToBasket);
      this.props.dispatch(action);
      this.props.dispatch(actionHistory(action));
    }                                                
}
                                     
export default connect()(ProductView);
                                            