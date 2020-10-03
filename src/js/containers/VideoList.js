import React, { Component } from 'react';
import VideoItem from '../components/VideoItem';
import './VideoList.css';

export class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: '',
            videos: [],
            dragIdx: '',
            clone: null
        }

        this.inputNode = React.createRef();
        this.setDragIdx = this.setDragIdx.bind(this);
        this.setCloneNode = this.setCloneNode.bind(this);
        this.playSelectedFile = this.playSelectedFile.bind(this);
    }

    componentDidMount() {
        const inputNode = document.querySelector('input');

        inputNode.addEventListener('change', this.playSelectedFile, false);

        this.setState({ URL: window.URL || window.webkitURL });
    }

    setDragIdx(dragIdx) {
        console.log('typeof', typeof dragIdx);
        this.setState({ dragIdx: dragIdx.toString() });
        console.log(this.state);
    }

    setCloneNode(clone) {
        this.setState({ clone });
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
                            props={{...this.state}}
                            file={fileURL}
                            fileIdx={idx}
                            setDragIdx={this.setDragIdx}
                            setCloneNode={this.setCloneNode}
                            dragIdx={{...this.state.dragIdx}}
                            clone={this.state.clone}
                        />
                    )}
                </ul>
            </div>
        );
    }
}