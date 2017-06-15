const CHANGE_TAB = 'CHANGE_TAB';
const ADD_PRODUCT = 'ADD_PRODUCT';
const HISTORY = 'HISTORY';
const ADD_NUMBER = 'ADD_NUMBER';
const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET";

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}


function actionAddToBasket (addToBasket) {
	return {
		type: ADD_PRODUCT_TO_BASKET,
		product: addToBasket
	}
}

function actionRemoveFromBasket (removeFromBasket) {
	return {
		type: REMOVE_PRODUCT_FROM_BASKET,
		product: removeFromBasket
	}
}


function actionAddProduct(addProduct) {
	return {
		type: ADD_PRODUCT,
		product: addProduct
	}
}


function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}


function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}


export { HISTORY, ADD_PRODUCT_TO_BASKET, ADD_PRODUCT, REMOVE_PRODUCT_FROM_BASKET, CHANGE_TAB,  ADD_NUMBER, actionAddToBasket, actionAddNumber, actionChangeTab, actionAddProduct, actionRemoveFromBasket, actionHistory };