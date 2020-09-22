import React, { Component } from 'react';
// import { Video } from '../components/Video';

export class VideoContainer extends Component {
    componentDidMount() {
        (function localFileVideoPlayer() {
          var URL = window.URL || window.webkitURL
          var displayMessage = function (message, isError) {
            var element = document.querySelector('#message')
            element.innerHTML = message
            element.className = isError ? 'error' : 'info'
          }
          var playSelectedFile = function (event) {
            var file = this.files[0]
            var type = file.type
            var videoNode = document.querySelector('video')
            var canPlay = videoNode.canPlayType(type)
            if (canPlay === '') canPlay = 'no'
            var message = 'Can play type "' + type + '": ' + canPlay
            var isError = canPlay === 'no'
            displayMessage(message, isError)
        
            if (isError) {
              return
            }
        
            var fileURL = URL.createObjectURL(file)
            videoNode.src = fileURL
          }
          var inputNode = document.querySelector('input')
          inputNode.addEventListener('change', playSelectedFile, false)
        })()
    }
    render() {
        console.log(this.props.videoIds);
        return (
            <div id="video-container">
                <div id="message"></div>
                <input type="file" accept="video/*" />
                <video controls autoplay></video>
            </div>
        );
    }
}