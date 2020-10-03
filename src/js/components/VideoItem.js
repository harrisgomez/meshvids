import React, { Component } from 'react';

// ! Swap still buggy

export class VideoItem extends Component {
    constructor(props) {
        super(props);

        this.videoNode = React.createRef();
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
    }

    componentDidMount() {
        this.videoNode.current.src = this.props.file;
    }

    drag(e) {
        e.dataTransfer.setData('application/x-moz-file', e.target);
        e.dataTransfer.setData('text', e.target.id);

        const itemId = e.dataTransfer.getData('text');

        this.props.setDragId(itemId);
    }

    drop(e) {
        e.preventDefault();

        const clone = e.target.cloneNode(true);
        let dropId = e.dataTransfer.getData('text');
        let nodeList = document.getElementById('video-list').childNodes;
        
        console.log('drag', this.props.dragId);
        console.log('drop', dropId);
        console.log('list', document.getElementById('video-list'));
        console.log('node', document.getElementById(dropId));
        console.log('target', e.target.parentNode);

        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].id === dropId) this.props.setDragId(dropId);
        }

        document.getElementById('video-list').replaceChild(document.getElementById(dropId), e.target.parentNode);
        document.getElementById('video-list').insertBefore(clone, document.getElementById('video-list').childNodes[this.props.dragId]);

    }

    render() {
        return (
            <li id={`video-file-${this.props.fileIdx}`}
                className='list'
                draggable='true'
                onDragStart={e => this.drag(e)}
                onDragOver={e => e.preventDefault()}
                onDrop={e => this.drop(e)}
            >
                <video
                    className='w-20'
                    ref={this.videoNode}
                    controls
                ></video>
            </li>
        );
    }
};

export default VideoItem;