import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoContainer } from './js/containers/VideoContainer';
import './App.css';
import 'tachyons';

import {
    doUploadVideo
} from './actions/action-creators';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <h1>Meshvids</h1>
                <h2>Link your videos. Control the order. Customize. Hit Play!</h2>

                <VideoContainer />

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