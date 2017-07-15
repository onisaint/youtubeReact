//create new component

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search';


const API_KEY = 'AIzaSyCccYHWP9l2C3ufeWBZ_NM9_UkwhX9_Mp0';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('app'));