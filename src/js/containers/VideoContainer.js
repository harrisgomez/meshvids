import React, { Component } from 'react';
// import { Video } from '../components/Video';

export class VideoContainer extends Component {
    componentDidMount() {
        (() => {
            const URL = window.URL || window.webkitURL;
            const displayMessage = (message, isError) => {
                const element = document.querySelector('#message');
                element.innerHTML = message;
                element.className = isError ? 'error' : 'info';
            };
            const playSelectedFile = function (event) {
                const file = this.files[0];
                const type = file.type;
                const videoNode = document.querySelector('video');
                let canPlay = videoNode.canPlayType(type);

                if (canPlay === '') canPlay = 'no';

                const message = 'Can play type "' + type + '": ' + canPlay;
                const isError = canPlay === 'no';

                displayMessage(message, isError);

                if (isError) return;

                const fileURL = URL.createObjectURL(file);

                videoNode.src = fileURL;
            };
            const inputNode = document.querySelector('input');

            inputNode.addEventListener('change', playSelectedFile, false);
        })()
    }

    render() {
        console.log(this.props.videoIds);
        return (
            <div id="video-container">
                <div id="message"></div>
                <input type="file" accept="video/*" />
                <video controls autoPlay></video>
            </div>
        );
    }
}