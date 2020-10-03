import React, { Component } from 'react';

// ! String idx is currently coerced to JSON when storing in state

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

        const itemIdx = e.dataTransfer.getData('text');
        console.log('itemIdx', itemIdx);
        this.props.setDragIdx(itemIdx);
        // console.log('idx being dragged', this.props.dragIdx);
    }

    drop(e) {
        e.preventDefault();

        // let clone = this.props.clone;

        // clone = e.target.cloneNode(true);
        this.props.setCloneNode(e.target.cloneNode(true));
        
        let dropIdx = e.dataTransfer.getData('application/x-moz-file'); // dragged idx

        let nodeList = document.getElementById('video-list').childNodes;
        // console.log('nodeList[0]', nodeList[0].id);
        // console.log('data', data);

        let dragIdx = this.props;
        
        // console.log('original idx from drag', dragIdx);
        console.log('old idx', dragIdx);
        console.log('state', this.props);
        
        for (let i = 0; i < nodeList.length; i++) {
            // if (nodeList[i].id === data) console.log(data)
            if (nodeList[i].id === dropIdx) dragIdx = dropIdx;
            if (nodeList[i].id === dropIdx) console.log('new idx', dropIdx)
        }

        // console.log('replacement', drop);

        // document.getElementById('video-list').replaceChild(document.getElementById(data), e.target);
        // document.getElementById('video-list').insertBefore(clone, document.getElementById('video-list').childNodes[dragIdx]);

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