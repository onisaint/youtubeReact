//create new component
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search';
import VideoList from './components/vedio-list';
import _yt from 'youtube-api-search';
import VideoDetail from "./components/vedio-detail";
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
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));