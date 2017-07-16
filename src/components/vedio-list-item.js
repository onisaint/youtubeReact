/**
 * Created by madhu on 7/12/2017.
 */
import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(){
        super();
    }

    render(){
        const video = this.extract(this.props.video);
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={video.imageUrl} alt=""/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            {video.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    extract(video){
        return {
            imageUrl: video.snippet.thumbnails.default.url,
            title: video.snippet.title
        }
    }
}

export default VideoListItem;