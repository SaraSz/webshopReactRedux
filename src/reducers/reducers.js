import { CHANGE_TAB, ADD_NUMBER, HISTORY, ADD_PRODUCT, ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET} from '../actions/actions.js';


function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function numbersReducer(state = [], action) {
	switch( action.type ) {
		case ADD_NUMBER:
			return [...state, action.number];
		default:
			return state;
	}
}
function pictureReducer(state = '', action) {
	return state;
}

function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
} 

function productReducer(state = [], action) {
	switch( action.type ) {
		case ADD_PRODUCT:
			return [...state, action.product];
		default:
			return state;
	}
}

function basketReducer(state = [], action) {
  
  function productsAreEqual(p1, p2) {
    if(p1.name === p2.name && p1.price === p2.price && p1.image === p2.image) {
      return true;
    } else {
      return false;
    }
  }
  
	switch( action.type ) {
		case ADD_PRODUCT_TO_BASKET:
			return [...state, action.product];
        
         case REMOVE_PRODUCT_FROM_BASKET:
          return state.filter(product => !productsAreEqual(product, action.product))
          
		default:
			return state;
	}
}



export {tabReducer, numbersReducer, basketReducer, pictureReducer, historyReducer, productReducer};
