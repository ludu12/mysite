import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1> Ramen Noodles </h1>
            <img style={{ width: '300px', height: '300px' }} src="ramen.jpg" />
            <h2>Ingredient List</h2>
            <ul>
                <li>First Ingredient</li>
                <li>Second Ingredient</li>
                <li>Third Ingredient</li>
            </ul>
            <h2> Cooking Instructions </h2>
            <p> Add cooking instructions here </p>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('.react-container'));