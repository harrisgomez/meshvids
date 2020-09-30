import React, { Component } from 'react';

export class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.videoNode = React.createRef();
    }

    componentDidMount() {
        console.log(this.videoNode);
        this.videoNode.current.src = this.props.file;
    }

    render() {
        return (
            <li className='list'>
                <video className='w-20' ref={this.videoNode} controls></video>
            </li>
        );
    }
};

export default VideoItem;