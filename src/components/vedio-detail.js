import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>loading...</div>;
    }

    const vid = video.id.videoId;
    const url = `https://www.youtube.com/embed/${vid}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} frameborder="0">

                </iframe>
            </div>
            <div className="jumbotron details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;