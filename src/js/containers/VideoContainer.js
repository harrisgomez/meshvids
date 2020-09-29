import React, { Component } from 'react';
import './VideoContainer.css';
// import { Video } from '../components/Video';

export class VideoContainer extends Component {
    componentDidMount() {
        (() => {
            const URL = window.URL || window.webkitURL;
            // const displayMessage = (message, isError) => {
            //     const element = document.querySelector('#message');
            //     element.innerHTML = message;
            //     element.className = isError ? 'error' : 'info';
            // };
            const playSelectedFile = function (event) {
                const file = this.files[0];
                // const type = file.type;
                const videoNode = document.querySelector('video');
                // let canPlay = videoNode.canPlayType(type);

                // if (canPlay === '') canPlay = 'no';

                // const message = 'Can play type "' + type + '": ' + canPlay;
                // const isError = canPlay === 'no';

                // displayMessage(message, isError);

                // if (isError) return;

                const fileURL = URL.createObjectURL(file);

                videoNode.src = fileURL;
            };
            const inputNode = document.querySelector('input');

            inputNode.addEventListener('change', playSelectedFile, false);
        })()
    }

    render() {
        return (
            <div id="video-container" className=''>
                {/* <div id="message"></div> */}
                <input id='video' style={{display: 'none'}} type="file" accept="video/*" />
                <label htmlFor="video">Upload</label>
                <video className='w-20' controls autoPlay></video>
            </div>
        );
    }
}