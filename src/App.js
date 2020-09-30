import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoList } from './js/containers/VideoList';
import './App.css';
import 'tachyons';

import {
    doUploadVideo
} from './actions/action-creators';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.labelRef = React.createRef();
    // }

    

    render() {
        return (
            <div className="App" >
                <h1>Meshvids</h1>
                <h2>Link your videos. Control the order. Customize. Hit Play!</h2>

                <VideoList />

            </div>
        );
    }
}

const mapState = state => ({
    video: state.video.videoInfo
});

const mapDispatch = dispatch => ({
    handleUploadVideo: () => dispatch(doUploadVideo())
});

export default connect(mapState, mapDispatch)(App);