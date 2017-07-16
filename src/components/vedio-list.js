/**
 * Created by madhu on 7/12/2017.
 */

import React, {Component} from 'react';
import VideoListItem from './vedio-list-item';

class VideoList extends Component {
    constructor(props){
        super();
    }

    render(){
        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem key={video.etag}
                                  onVideoSelect={this.props.onVideoSelect}
                                  video={video}/>
        });
        return (
            <section>
                <ul className="col-md-4 list-group">
                    {videoItems}
                </ul>
            </section>
        )
    }
}

export default VideoList;