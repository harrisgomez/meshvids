import React, { Component } from 'react';
import './VideoContainer.css';

// TODO Detach upload button
// TODO Create unordered list style of adding videos

export class VideoContainer extends Component {
    componentDidMount() {
        (() => {
            const URL = window.URL || window.webkitURL;
            const playSelectedFile = function (event) {
                const file = this.files[0];
                const videoNode = document.querySelector('video');
                const fileURL = URL.createObjectURL(file);

                videoNode.src = fileURL;
            };
            const inputNode = document.querySelector('input');

            inputNode.addEventListener('change', playSelectedFile, false);
        })()
    }

    render() {
        return (
            <div id="video-container">
                <input id='video' style={{display: 'none'}} type="file" accept="video/*" />
                <label htmlFor="video">Upload</label>
                <video className='w-20' controls autoPlay></video>
            </div>
        );
    }
}