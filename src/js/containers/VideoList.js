import React, { Component } from 'react';
import VideoItem from '../components/VideoItem';
import './VideoList.css';

export class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: '',
            videos: [],
            dragId: ''
        }

        this.inputNode = React.createRef();
        this.setDragId = this.setDragId.bind(this);
        this.playSelectedFile = this.playSelectedFile.bind(this);
    }

    componentDidMount() {
        const inputNode = document.querySelector('input');

        inputNode.addEventListener('change', this.playSelectedFile, false);

        this.setState({ URL: window.URL || window.webkitURL });
    }

    setDragId(dragId) {
        this.setState({ dragId });
    }

    playSelectedFile(e) {
        const inputNode = this.inputNode.current;
        const file = inputNode.files[0];
        const fileURL = URL.createObjectURL(file);
        const videos = this.state.videos;

        videos.push(fileURL);

        this.setState({ videos });
    }

    render() {
        return (
            <div id="video-container">
                <div id="video-editor" className='tc'>
                    <input id='video' ref={this.inputNode} style={{ display: 'none' }} type="file" accept="video/*" />
                    <label htmlFor="video">Upload</label>
                </div>

                <ul id='video-list'>
                    {this.state.videos.map((fileURL, idx) =>
                        <VideoItem
                            key={`video-${idx}`}
                            file={fileURL}
                            fileIdx={idx}
                            setDragId={this.setDragId}
                            {...this.state}
                        />
                    )}
                </ul>
            </div>
        );
    }
}