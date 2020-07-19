import React, { Component } from 'react';
// import { Video } from '../components/Video';

export class VideoContainer extends Component {
    render() {
        console.log(this.props.videoIds);
        return (
            <div id="video-container">
                {/* {this.props.videoIds.map((videoId, idx) => (
                    <ul>
                        <li key={idx}>
                            {videoId}
                        </li>
                    </ul>
                ))} */}

            </div>
        );
    }
}