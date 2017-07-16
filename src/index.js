//create new component
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search';
import _yt from 'youtube-api-search';
const API_KEY = 'AIzaSyCccYHWP9l2C3ufeWBZ_NM9_UkwhX9_Mp0';



class App extends Component {
    constructor(props){
        super();
        this.state = {
            videos: []
        };
        _yt({key: API_KEY, term: 'surfboards'}, (response) => {
           this.setState({videos:response});
        });
    }

    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));