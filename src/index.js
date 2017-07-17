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
            videos: [],
            selectedVideo: null
        };
        this.search('hey brother');
    }

    search(term){
        _yt({key: API_KEY, term: term}, (response) => {
            this.setState({
                videos:response,
                selectedVideo:response[0]
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearch={searchTerm => this.search(searchTerm)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));