import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer, imageReducer, priceReducer, basketReducer } from './reducers/reducers.js';



let initialState = {
	tab: 1,  
	numbers: [2, 4, 8, 16, 32, 64],
    history: [{type: "Testing"}],
    products: [
        {
            name: "Cat",
            image: "https://www.healthypawspetinsurance.com/Images/V3/responsive/cat_icon.png",
            price: 50
        },
        {
            name: "Dog",
            image: "http://www.dog-names-and-more.com/images/unique-male-dog-names-tired-cocker-spaniel.jpg",
            price: 350
        },
        {
            name: "Guinea pig",
            image: "https://www.tinkercad.com/images/e9Ja5pkflv2/t40.jpg?t=0",
            price: 650
        }
    ],
    basket: []
}


let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
    history: historyReducer,
    products: productReducer,
    basket: basketReducer
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();